import React, { useEffect } from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../models";

const ShopPage = ({ match }: RouteComponentProps) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: StoreState) => state.shop.fetching);

  useEffect(() => {
    dispatch(fetchCollectionsStart())
  }, [dispatch])

  return (
    <div className="shop-page">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            path={`${match.path}/:collectionTitle`}
            component={CollectionPage}
          />
        </>
      )}
    </div>
  );
};

export default React.memo(ShopPage);
