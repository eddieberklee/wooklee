git add .
git ci -am "automated pushing"
git remote add website ssh://ehdeelee_wooklee@ssh.phx.nearlyfreespeech.net/home/public/.git
git push origin master
git push website master

