   
   const shapes = rectStyle();

   const newPage = "_blank";
// get profile links from firebase
//returns a promimse
const getProfileLinks = () => {
   let links = [];
   const linksRef = firebase.database().ref('profileLinks');
   return linksRef.once('value').then((snapshot) => { 
       let items = snapshot.val();
       for (let item in items){
           links.push({
               id: item,
               platform: items[item].platform,
               link: items[item].link,
               color: items[item].color
           });
       }
       return links;
   })
}

const [profiles, setProfiles] = useState([]);
   // load firebase data once
   useEffect(() => {
      getProfileLinks()
          .then((res) => setProfiles(res))
          .catch((err) => console.log(err))
      
      getProfileSummaries()
          .then((res) => setSummaries(res))
          .catch((err) => console.log(err))
  }, []);

      // generate profile link elements
      const createProfileLinks = () => {
        return profiles.map((profiles,index) => 
            <a className={classes.itemLink} 
                target={newPage}
                href={profiles.link}>
                <span
                    className={shapes.rect} 
                    style={{background: profiles.color}} />
                <Typography 
                    variant="caption" 
                    className={classes.itemLink}
                    gutterBottom>
                    {profiles.platform}
                </Typography>
            </a>
        );
    }

    <div className={classes.itemRow}>
    <Typography 
        variant="caption" 
        className={classes.itemRowTitle}
        gutterBottom>
        PROFILES
    </Typography>
    {createProfileLinks()}
</div>