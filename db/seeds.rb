# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#   

user = User.create(email:"user@user.com",password: "password", password_confirmation: "password")
keyboard = Keyboard.create(user_id: 1, name: "Middle C Keyboard")

keyCode = {
  a: 65,
  w: 87,
  s: 83, 
  e: 69,
  d: 68,
  f: 70,
  t: 84,
  j: 74,
  i: 73,
  k: 75,
  l: 76,
  o: 79,
  semicolon: 186,
  g: 71
} 

middle_c = Key.create(frequency: 261.626, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:a])
c_sharp  = Key.create(frequency: 277.183 , wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:w])
middle_d = Key.create(frequency: 293.665, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:s])
d_sharp  = Key.create(frequency: 311.127 , wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:e])
middle_e = Key.create(frequency: 329.628, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:d])

middle_f = Key.create(frequency: 349.228, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:f])
f_sharp  = Key.create(frequency: 369.994, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:t])
middle_g = Key.create(frequency: 391.995, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:j])
g_sharp  = Key.create(frequency: 415.305, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:i])
middle_a = Key.create(frequency: 440.000, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:k])
a_sharp  = Key.create(frequency: 466.164, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:o])
middle_b = Key.create(frequency: 493.883, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:l])
tenor_c  = Key.create(frequency: 523.251, wave: 0, panner: 0, delay: 0, note_filter: 0, volume: 0.5, key_code: keyCode[:semicolon])

keyboard.keys << middle_c
keyboard.keys << c_sharp 
keyboard.keys << middle_d
keyboard.keys << d_sharp 
keyboard.keys << middle_e
keyboard.keys << middle_f
keyboard.keys << f_sharp 
keyboard.keys << middle_g
keyboard.keys << g_sharp 
keyboard.keys << middle_a
keyboard.keys << a_sharp 
keyboard.keys << middle_b
keyboard.keys << tenor_c 

wild = Keyboard.create(name: "Wild_Keyboard")

wild_middle_c = Key.create(frequency: 261.626, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:a])
wild_c_sharp  = Key.create(frequency: 277.183, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:w])
wild_middle_d = Key.create(frequency: 293.665, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:s])
wild_d_sharp  = Key.create(frequency: 311.127, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:e])
wild_middle_e = Key.create(frequency: 329.628, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:d])

wild_middle_f = Key.create(frequency: 349.228, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:f])
wild_f_sharp  = Key.create(frequency: 369.994, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:t])
wild_middle_g = Key.create(frequency: 391.995, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:j])
wild_middle_g_repeat = Key.create(frequency: 391.995, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:g])

wild_g_sharp  = Key.create(frequency: 415.305, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:i])
wild_middle_a = Key.create(frequency: 440.000, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:k])
wild_a_sharp  = Key.create(frequency: 466.164, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:o])
wild_middle_b = Key.create(frequency: 493.883, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:l])
wild_tenor_c  = Key.create(frequency: 523.251, wave: 1, panner: -3, delay: 0.1, note_filter: -1000.00, volume: 0.5, key_code: keyCode[:semicolon])

wild.keys << wild_middle_c
wild.keys << wild_c_sharp 
wild.keys << wild_middle_d
wild.keys << wild_d_sharp 
wild.keys << wild_middle_e
wild.keys << wild_middle_f
wild.keys << wild_f_sharp 
wild.keys << wild_middle_g
wild.keys << wild_middle_g_repeat
wild.keys << wild_g_sharp 
wild.keys << wild_middle_a
wild.keys << wild_a_sharp 
wild.keys << wild_middle_b
wild.keys << wild_tenor_c 
