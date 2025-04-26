import { useState } from "react";
import { Container,Row, Col } from "react-bootstrap";
import {ToastContainer, toast} from "react-toastify";

export default function Products()
{
    let [product, setproduct] = useState([
        {
            title : "Watch",
            price : "1050",
            description : "The most popular branded watch",
            img : require('./Images/watch.png')
        },
        {
            title : "Teddy",
            price : "350",
            description : "The beautiful teddy bear",
            img : require('./Images/teddy.png')
        },
        {
            title : "TV",
            price : "24000",
            description : "The most popular branded tv",
            img : require('./Images/tv.png')
        },
        {
            title : "Laptop",
            price : "30000",
            description : "The most popular branded laptop",
            img : require('./Images/laptop.png')
        },
        {
            title : "Shoes",
            price : "800",
            description : "The most popular branded shoes",
            img : require('./Images/shoes.png')
        },
        {
            title : "Mobile",
            price : "15500",
            description : "The most popular branded mobile",
            img : require('./Images/mobile.png')
        },
    ])

    let [newdata, setnewdata] = useState([])

    let addproduct = (data)=>
    {
        const result = newdata.filter((item)=> item == data);
        if(result.length == 0)
        {
            setnewdata([...newdata, data])
            localStorage.setItem("cart", JSON.stringify([...newdata, data]));
            toast.success("Added Successfully!");
        }
        else
        {
            toast.error("Already Added");
        }
    }
// npm i react-toastify  ^X^c   npm run build
    return(
        <>
        <Container fluid>
        <ToastContainer position="top-center"/>
            <Row>
                <h1 className="bg-primary p-3 text-white text-center mt-3 mb-3"> List of Products</h1>
                <Col>
                <div className="row pd">
                    {product.map((data,index)=>
                    <div className="col-md-4 col-sm-12 products">
                        <img src={data.img} alt="..." width={250} height={250} />
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <h2>{data.price}</h2>
                        <button onClick={()=>addproduct(data)}>Add to Cart</button>
                    </div>
                    )}
                </div>   
                </Col> 
            </Row>
        </Container>
        </>
    )
}