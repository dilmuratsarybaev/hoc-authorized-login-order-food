import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material";
import { getMeals } from "../../store/meals/meals.thunk";
import { MealItem } from "./meal-Item/MealItem";

export const Meals = () => {
  const dispatch = useDispatch();
  const { meals, isLoading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <Card>
      {isLoading && !error && <p>Loading ..........</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {meals.map((meal) => {
          return <MealItem meal={meal} key={meal._id} />;
        })}
      </ul>
    </Card>
  );
};

const Card = styled("div")(({ theme }) => ({
  width: "64.9375rem",
  background: theme.palette.secondary.main,
  borderRadius: "16px",
  margin: "135px auto",
  padding: "18px 40px 10px 40px",
}));
