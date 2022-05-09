import React from "react";
import Head from "next/head";
export default function home() {
  return (
    <>
      <Head>
        <title>pdftoolz -Home</title>
        <a href="https://github.com/bgoonz/pdf-tools">Github Repo</a>
      </Head>
      <div>
        <br></br>

        <br></br>
        <hr></hr>
        <h2>Usage</h2>
        <br></br>

        <img src="https://i.imgur.com/5JDpzgO.gif" />
      
            <footer
              style={{
                boxSizing: "border-box",
                display: "block",
                paddingTop: "40px",
                paddingBottom: "40px",
                marginTop: "100px",
                color: "rgb(119, 119, 119)",
                textAlign: "center",
                borderTop: "1px solid rgb(229, 229, 229)",
              }}
            >
              <p style={{ boxSizing: "border-box", margin: "0px 0px 10px" }}>
                ©Mozilla and individual contributors
              </p>
            </footer>
          </div>
   

    </>
  );
}
