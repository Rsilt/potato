import React from "react"

const Userinfo = () => {
  const interests = [
    "korvpall",
    "tibud",
    "vihmaga ujumine",
    "Nätaki",
    "Maal olemine",
    "2K24",
    "Chillimine",
    "magamine",
    "DJmine",
    "muusika",
    "Koodimine",
    "Suvi"
  ]

  return (
    <>
      <h2>Roland Silt</h2>
      <text>Minu huvid:</text>
      <ol>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ol>
      <form>
        <label htmlFor="Name">Nimi </label>
        <input id="Name" />
        <label htmlFor="Email">E-mail </label>
        <input
          type="email"
          id="Email"
        />
        <br />
        <label htmlFor="Message">Lemmik Eesti youtuber</label>
        <textarea
          id="Message"
          rows="5"
          cols="50"
        />
        <input
          type="Submit"
          value="Submit"
        />
      </form>
      <div>
        <button>Click here!</button>
      </div>
    </>
  )
}

export default Userinfo
