# Active environment
environment = "qa"

# Sample time in ~seconds
sampleTime = 7200

# Device ID for this PI
deviceID = 0

# Different Primary environment configurations
env_dev1 = {'webApi': '[REPLACE ME]',
         	'username': '[REPLACE ME]',
         	'password': 'dGVzdHRlc3Q='}
env_dev2 = {'webApi': '[REPLACE ME]',
         	'username': '[REPLACE ME]',
         	'password': '[REPLACE ME]'}
env_qa = {'webApi': '[REPLACE ME]',
         	'username': '[REPLACE ME]',
         	'password': '[REPLACE ME]'}
env_prod = {'webApi': '[REPLACE ME]',
         	'username': '[REPLACE ME]',
         	'password': '[REPLACE ME]='}

# Optional Secondary endpoints to post data
process_sec_endpoints = True
sec_endpoints = [
			['Azure', '[REPLACE ME]', '[REPLACE ME]', '[REPLACE ME]'],
            ['Google', '[REPLACE ME]', '[REPLACE ME]', '[REPLACE ME]'],
            ['[REPLACE ME]', '[REPLACE ME]', '[REPLACE ME]', '[REPLACE ME]'],
            ['[REPLACE ME]', '[REPLACE ME]', '[REPLACE ME]', '[REPLACE ME]']
