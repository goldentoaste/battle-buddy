
import sys


def main():
    while (stdin := input()) != 'stop':
        
        print(f'python says: {stdin}')
    print('shuting down.')

if __name__ == '__main__':
    main()