class Scene
  def initialize beginning_state
    @state = beginning_state
    @scenes = {
      chapter_1: [
        "Hello and welcome to chapter 1 of my game!",
        :ch1_talk,
        :ch1_action,
        :ch1_attack,
        :chapter_2],
      ch1_talk: [
        "Please stop talking while I'm talking!",
        :ch1_talk,
        :ch1_action,
        :ch1_attack,
        :chapter_2],
      ch1_action: [
        "W-what are you doing?!",
        :ch1_talk,
        :ch1_action,
        :ch1_attack,
        :chapter_2],
      ch1_attack: [
        "Stop, that hurts :c",
        :ch1_talk,
        :ch1_action,
        :ch1_attack,
        :chapter_2],
      chapter_2: [
        "Congratulations, you have entered...\n chapter 2!",
        :ch2_talk,
        :ch2_action,
        :ch2_attack,
        :ch2_flee],
      ch2_talk: [
        "I'm ignoring you",
        :ch2_talk,
        :ch2_action,
        :ch2_attack,
        :ch2_flee],
      ch2_action: [
        "I don't even care",
        :ch2_talk,
        :ch2_action,
        :ch2_attack,
        :ch2_flee],
      ch2_attack: [
        "You're no match for me",
        :ch2_talk,
        :ch2_action,
        :ch2_attack,
        :ch2_flee],
      ch2_flee: [
        "Okay, goodbye!",
        :ch2_talk,
        :ch2_action,
        :ch2_attack,
        :ch2_flee],
    }
  end

  def display
    puts @scenes[@state][0]
  end

  def talk
    @state = @scenes[@state][1]
  end

  def action
    @state = @scenes[@state][2]
  end

  def attack
    @state = @scenes[@state][3]
  end

  def flee
    @state = @scenes[@state][4]
  end
end

scene = Scene.new(:chapter_1)
while true
  scene.display
  print "> "
  action = $stdin.gets.chomp
  if command == 'talk'
    scene = scene.talk
  elsif command == 'action'
    scene = scene.action
  elsif command == 'attack'
    scene = scene.attack
  elsif command == 'flee'
    scene = scene.flee
  else
    puts 'unknown command!'
  end
end
