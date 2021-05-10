import { useRef } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";


export default function Home() {
    const refInput = useRef(null);

    return (
        <>
            <div className="container">
                <div className="content">
                    <h1 className="title">
                        Voer de username in
                    </h1>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder=" username"
                            aria-label=" username"
                            aria-describedby="basic-addon2"
                            ref={refInput}
                        />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={() => {
                                const username = refInput?.current?.value || null

                                if (username) {
                                    window.location.href = '/user/' + username; //one level up
                                }
                                console.log("test");
                                console.log("text",)
                            }}>Selecteren</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
            </div>

            <style jsx>{`
    
    .container{
        display:flex;
        align-items:center;
        justify-content:center;
        height:100vh;
        width:100vw;
      }
      .content{
          width: 500px;
        display:flex;
        flex-direction:column;
        align-items:center;
      }
      .content > *{
          margin-bottom: 1rem;
      }
      .content input{
        padding: 1rem 2rem;
      }
`}</style>
        </>
    )
}
