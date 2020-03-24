#Build Everything
bash buildFullApp.sh


(cd backend/; sh deployApp.sh)

(cd client/; sh deployApp.sh)
