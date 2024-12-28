import React, { useState } from 'react'
import slugify from 'slugify';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function SignIn() {

 // https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.linkedin.com&size=128

  const [userdata, setUserdata] = useState(null)


  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // setUserdata(result.user)

        const data = result.user.providerData[0]

        const name = slugify(data.displayName.toLocaleLowerCase)
        const photoURL = data.photoURL
        const email = data.email


        setUserdata({name,email,photoURL})
        localStorage.setItem("user", JSON.stringify({name,email,photoURL}))
      })


  }


  return (
    <>

      <div className="">sign in</div>

      <button onClick={google}>Google</button>
    </>
  )
}

export default SignIn