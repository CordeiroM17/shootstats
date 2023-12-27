export const validatorSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      status: 'Error',
      message: 'Something went wrong, check errors in data',
      data: error.errors.map((e) => e.message),
    });
  }
};
