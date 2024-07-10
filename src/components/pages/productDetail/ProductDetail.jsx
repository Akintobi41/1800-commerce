import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchData } from "../../../contentful/contentful";
import ImageSwiper from "../../imageSwiper/ImageSwiper";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        await fetchData(id).then((data) => { 
          setProduct(data)
          console.log(data)
        }
        );
        setLoading(true);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, [id]);

  console.log(product)
  // const {fields} = product
  // console.log(fields)

  return (
    <ImageSwiper images={product?.fields.images} />
  );
}

export default ProductDetail;
