import argparse
import json

objeto = {
    "nombre": 'John Doe',
    "edad": 30,
    "ocupacion": 'Desarrollador'
  }

parser = argparse.ArgumentParser()
parser.add_argument('--objeto', required=True, help='Objeto serializado como JSON')
args = parser.parse_args()
args = str(args)
print(args[19:-2])