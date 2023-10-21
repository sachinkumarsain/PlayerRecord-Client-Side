import React from 'react'
import Typewriter from 'typewriter-effect';

function TypewriterWork() {
  return (
  <span>
     <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Failures are finger posts on the road to achievement")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("If you can't accept losing, you can't win.")
                    .pauseFor(1500)
                    .deleteAll()
                    .start();
                }}
              ></Typewriter>
  </span>
  )
}

export default TypewriterWork