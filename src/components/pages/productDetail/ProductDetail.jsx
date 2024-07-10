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
  // const {fields} = await product
  // console.log(fields)

  return (
    <section>
    <ImageSwiper images={product?.fields.images} />
    
    </section>
  );
}

export default ProductDetail;
