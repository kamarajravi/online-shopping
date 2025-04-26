import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Mycart()
{
    let [product, setproduct] = useState([]);

    useEffect(()=>
    {
        let alldata = localStorage.getItem("cart")
        if(alldata.length !=0)
        {
            setproduct(JSON.parse(alldata));
        }
    },[])

    let removedata = (data)=>
    {
        const result = product.filter((item)=> item !== data);
        setproduct(result);
        localStorage.setItem("cart", JSON.stringify(result));
        toast.info("Product Removed")
    }

    let nav = useNavigate();

    let goto = ()=>
    {
        localStorage.setItem("cart","")
        nav('/thankyou');
        toast.success("Thank You")
    }

    return(
        <>
        <Container fluid>
            <ToastContainer position="top-center" theme="dark"/>
            <Row>
                <h1 className="bg-primary p-3 text-white text-center">My Cart List</h1>
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
        <div className="p-4 text-center bg-info">
            <button className="btn btn-success" onClick={goto}>Place Order</button>
        </div>
        </>
    )
}