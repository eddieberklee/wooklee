# haml_watch.py
# Windows Version

import sys, os, time

# file_complete = raw_input('enter file name (*.haml): ')
filename_complete = sys.argv[1]
filename = filename_complete[:filename_complete.find('.')]
haml_call = "haml " + filename + ".haml " + filename + ".html"
print haml_call
os.system(haml_call)
old_call = os.stat(filename_complete)
while 1:
  time.sleep(0.9)
  try:
    current_call = os.stat(filename_complete)
  except:
    pass
  if current_call != old_call:
    print 'Detected a change in ' + filename_complete
    print haml_call
    os.system(haml_call)
    old_call = current_call
