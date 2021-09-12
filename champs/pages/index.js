import { useRef } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  const refInput = useRef(null);

  return (
    <>
      <Image
        className="bg"
        src="/bg.jpg"
        alt="heimerdinger"
        layout="fill"
        objectFit="cover"
      />
      <div className="container">
        <div className="content">
          <h2 className="title">Voer je username in</h2>
          <InputGroup className="mb-3">
            <FormControl
              className="username_input"
              placeholder="username"
              aria-label="username"
              aria-describedby="basic-addon2"
              ref={refInput}
            />
            <InputGroup.Append>
              <Button
                variant="dark"
                onClick={() => {
                  const username = refInput?.current?.value || null;
                  if (username) {
                    window.location.href = "/user/" + username; //one level up
                  }
                }}
              >
                All games
              </Button>
            </InputGroup.Append>
            <InputGroup.Append>
              <Button
                variant="dark"
                onClick={() => {
                  const username = refInput?.current?.value || null;
                  if (username) {
                    window.location.href = "/user/" + username + "?ranked"; //one level up
                  }
                }}
              >
                Ranked only
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
      <style jsx>{`
        :global(.username_input) {
          background: #343a40a1;
          color: white;
        }
        :global(.username_input::placeholder) {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: white;
        }
        .container {
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          padding: 4rem 0;
        }
        .content {
          width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .content > * {
          margin-bottom: 1rem;
        }
        .content input {
          padding: 1rem 2rem;
        }
      `}</style>
    </>
  );
}
