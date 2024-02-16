import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../constants/env";
import { useLocalStorage } from "../../storage/useLocalStorage";
import Actions from "../molecules/Actions";
import Descriptions from "../atoms/Descriptions";
import Image from "../atoms/Image";

const DetailsView = () => {
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);
    const { getItem, setItem } = useLocalStorage(`Detail_${id}`);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedData = getItem();
                if (storedData && !storedData.expired) {
                    setProductDetail(storedData.value);
                    setLoaded(true); 
                } else {
                    const response = await axios.get(`${API_URL}api/product/${id}`);
                    const data = response.data;
                    setProductDetail(data);
                    setItem(data);
                    setLoaded(true); 
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (!loaded) {
            fetchData();
        }

    }, [id, getItem, setItem, loaded]);

    return (
        <div className="view">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {productDetail && <Image product={productDetail} />}
                    </div>
                    <div className="col-md-6">
                        {productDetail && <Descriptions product={productDetail} />}
                        {productDetail && <Actions product={productDetail} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsView;
