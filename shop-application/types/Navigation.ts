import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { Product } from "./Product";

export type RootStackParamList = {
    Products: undefined;
    ProductDetailView: { product: Product };
};

export type ProductsProps = StackNavigationProp<RootStackParamList, 'Products'>;
export type ProductDetailViewProps = StackScreenProps<RootStackParamList, 'ProductDetailView'>;