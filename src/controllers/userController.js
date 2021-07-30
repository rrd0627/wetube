const fakeUser = {
    username : "koki",
    loggedIn : true
}


export const join = (req, res) => res.send("join");
export const edit = (req, res) => res.render("home",{ pageTitle : "Home", fakeUser});


