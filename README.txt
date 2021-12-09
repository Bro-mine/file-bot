This bot serves the purpose of a NAS (kinda) for a Discord server. Users can save files to the host machine, and have the bot send the files back to them when needed, that could be useful for server logs, and things like that.

Users can only access their respective folders, meaning you can only access your data if you have access to the host machine, or if you are logged in with your account, so your account serves as your password as well. Global folders are planned to be included in the near future.

COMMANDS / HOW TO USE THE BOT:

*ALL USERS MUST USE --initialize BEFORE USING ANY OTHER COMMANDS*

The --initialize command must be used at least once (by each user) to generate the respective user's directory, their home directory, so to speak. The command also needs to be used for each server the bot is in. Directories and files are NOT shared between servers even if the user is the same.

--initialize: Read above. Generates a directory dedicated to the user invoking the command.

savefile <name>: Saves the attachment included with the message invoking the command, be it a image, or any other file. (ONLY ONE ATTACHMENT MAY BE INCLUDED AT A TIME FOR NOW).

Usage: savefile test.txt -> Saves the attachment and renames it to "test.txt"

sendfile <name>: Sends the saved file from the host machine with the specified name. (Only one file can be sent at a time).

Usage: sendfile test.jpg -> Sends the file "test.jpg" if it is present in your user directory (the one created with --initialize). Sends an error message if the files does not exist.

ls: Lists all files present in your user directory. Use the -a flag to list hidden files as well.

HIDING FILES:

If the bot is being hosted in a Linux machine, add a "." to the beginning of the filename when using --savefile. I am not entirely sure how it works on Windows.

NOTES / WARNINGS:

The commands executed by the bot are Linux and Unix commands, if you are running this on Windows, you will either have to change the commands in the source (only a couple of words, relax) or use PowerShell as the command interpreter (Probably should work, there aren't any complex commands being used anyways).
