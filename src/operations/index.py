import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--objeto', required=True, help='Objeto serializado como JSON')
args = parser.parse_args()

print(f'{args}')



