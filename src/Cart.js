import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Cart()
{
    let [product, setproduct] = useState([]);


    useEffect(()=>
    {
        let alldata = localStorage.getItem("cart")
        setproduct(JSON.parse(alldata));
        // alert("Product added successfully")
    },[])

    let removedata = (data)=>
    {
        const result = product.filter((item)=> item !== data);
        setproduct(result);
        localStorage.setItem("cart", JSON.stringify(result));
    }

    return(
        <>
        <Container fluid>
            <Row>
                <h1 className="bg-primary p-3 text-white">My Cart List</h1>
                <div className="row pd">
                    {product.map((data,index)=>
                    <div className="col-md-12 col-sm-12 products">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-3">
                                <img src={data.img} width={150} height={150} />
                            </div>
                            <div className="col-3">
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                            </div>
                            <div className="col-3">
                                <p>{data.price}</p>
                            </div>
                            <div className="col-3">
                                <button onClick={()=>removedata(data)}>Remove</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </Row>
        </Container>
        </>
    )
}