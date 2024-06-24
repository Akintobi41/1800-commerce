import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchData } from "../../../contentful/contentful";

function ProductDetail() {
  const id = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        await fetchData(id).then((data) =>
          setProduct(data)
        );
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [id]);
console.log(product)
  return <div>Product Details</div>;
}

export default ProductDetail;
