import { useContext, useEffect, useState } from "react";
import { ContextProducts } from "../../context/products";
import {
  Container,
  ProductsContainer,
  ContainerHeaderProducts,
  ProductsList,
  Cards,
  CardContainer,
  Content,
  Overlay,
  DetailsCard,
  FormContainer,
  FilterComponent,
  OpenFilters,
  ContentList,
  ContainerButtons,
} from "./styles";
import axios from "axios";
import * as z from "zod";
import * as Dialog from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Accordion from "@radix-ui/react-accordion";
import { getProducts } from "../../services/getProducts";
import "react-toastify/dist/ReactToastify.css";
import { Carrousel } from "../../components/swiper";
import { Header } from "../../components/header";
import { IoIosAdd } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import SearchBar from "@mkyy/mui-search-bar";
import Marquee from "react-fast-marquee";
import { AiFillThunderbolt } from "react-icons/ai";
import { BiListCheck } from "react-icons/bi";
import { FaTshirt } from "react-icons/fa";
import { GiConverseShoe } from "react-icons/gi";
import { MdLocalMall } from "react-icons/md";
import { useFilter } from "../../hooks/useFilter";

const MAX_FILE_SIZE = 12500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  name: z.string().nonempty("Preencha o campo Nome"),
  description: z.string().nonempty("Descrição do produto necessaria."),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Tamanho da imagem não pode ser maior que 5mb.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  category: z.string(),
  price: z.string().nonempty("Defina o preço do produto."),
  shipment: z.string().nonempty("Defina o valor do frete."),
});

type FormProps = z.infer<typeof schema>;

export const Products = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  const { products, setProducts } = useContext(ContextProducts);

  const [activeButton, setActiveButton] = useState("");

  const [textFieldValue, setTextFieldValue] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");

  const [selectedPrice, setSelectedPrice] = useState("");


  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceFilter = (price: string) => {
    setSelectedPrice(price);
  };

  const handleClick = (value: string) => {
    setActiveButton(value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  useEffect(() => {
    getProducts(setProducts);
  }, [setProducts]);

  useFilter("category", "name");

  const Submit = (data: FormProps) => {
    try {
      const jwt = localStorage.getItem("jwt");
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("image", data.image[0]);
      formData.append("description", data.description);
      formData.append("shipment", data.shipment);
      axios
        .post("http://localhost:3300", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: jwt,
          },
        })
        .then((response) => {
          console.log("Produto enviado com sucesso!");
          console.log(response.data);
          getProducts(setProducts);
          reset();
        })
        .catch((error) => {
          console.log("Erro ao enviar produto!");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

   const handleSearch = (searchValue: string) => {
    setTextFieldValue(searchValue);
    console.log(searchValue);
  };
  
  console.log(errors);
  return (
    <Container>
      <ContainerHeaderProducts>
        <Header />
        <Carrousel />
      </ContainerHeaderProducts>
      <div className="marqueeContainer">
        <Marquee speed={150} className="marquee">
          <div>
            <span>
              <AiFillThunderbolt /> Explore o poder do Jogajunto!
            </span>
            <span>
              <AiFillThunderbolt /> Suas melhores ofertas merecem destaque no
              Jogajunto!
            </span>
            <span>
              <AiFillThunderbolt /> Produtos de todas as categorias, em um só
              lugar
            </span>
          </div>
        </Marquee>
      </div>
      <ProductsContainer>
        <nav>
          <ul>
            <SearchBar
              width={"100%"}
              value={textFieldValue}
              onChange={(newValue) => setTextFieldValue(newValue)}
              onSearch={handleSearch} // Pass the search input to handleSearch
              placeholder="Pesquisar um produto"
            />
            <h2 className="first">
              <BiListCheck /> Produtos <span>{products.length}</span>
            </h2>
            <Accordion.Root
              className="AccordionRoot"
              type="single"
              defaultValue="item-1"
              collapsible
            >
              <FilterComponent value="item-1">
                <OpenFilters>
                  <h2>Categorias: </h2>
                </OpenFilters>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight: selectedCategory === "" ? 600 : "normal",
                    }}
                    onClick={() => handleCategoryFilter("")}
                  >
                    Todos
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight:
                        selectedCategory === "Roupas" ? 600 : "normal",
                    }}
                    onClick={() => handleCategoryFilter("Roupas")}
                  >
                    Roupas
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight:
                        selectedCategory === "Calçados" ? 600 : "normal",
                    }}
                    onClick={() => handleCategoryFilter("Calçados")}
                  >
                    Calçados
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight:
                        selectedCategory === "Acessórios" ? 600 : "normal",
                    }}
                    onClick={() => handleCategoryFilter("Acessórios")}
                  >
                    Acessórios
                  </li>
                </ContentList>
              </FilterComponent>
              <FilterComponent value="item-2">
                <OpenFilters>
                  <h2>Preço </h2>
                </OpenFilters>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight: selectedPrice === "100" ? 600 : "normal",
                    }}
                    onClick={() => handlePriceFilter("100")}
                  >
                    R$ 100,00
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight: selectedPrice === "200" ? 600 : "normal",
                    }}
                    onClick={() => handlePriceFilter("200")}
                  >
                    R$ 200,00
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight: selectedPrice === "300" ? 600 : "normal",
                    }}
                    onClick={() => handlePriceFilter("300")}
                  >
                    R$ 300,00
                  </li>
                </ContentList>
                <ContentList>
                  <li
                    className="contentList"
                    style={{
                      fontWeight: selectedPrice === "400" ? 600 : "normal",
                    }}
                    onClick={() => handlePriceFilter("400")}
                  >
                    R$ 400,00
                  </li>
                </ContentList>
              </FilterComponent>
            </Accordion.Root>
          </ul>
        </nav>
        <ProductsList>
          <Dialog.Root>
            <header>
              <h1>
                <MdShoppingCart size="22" color="#ffd700" />
                Backoffice JogaJunto
              </h1>
              <Dialog.Trigger asChild>
                <button>
                  <IoIosAdd size="20" /> Adicionar
                </button>
              </Dialog.Trigger>
            </header>
            <Overlay>
              <Content>
                <FormContainer onSubmit={handleSubmit(Submit)}>
                  <h1>Cadastro de produto</h1>
                  <div>
                    <label>Nome do Produto</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Camiseta..."
                    />
                  </div>
                  <div></div>
                  <div>
                    <label htmlFor="">Descrição do Produto</label>
                    <input
                      {...register("description")}
                      type="text"
                      placeholder="Camisa branca tamanho P"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Categoria</label>
                    <ContainerButtons>
                      <label
                        className={activeButton === "Roupas" ? "active" : ""}
                      >
                        <FaTshirt size="22" />
                        <span>Roupas</span>
                        <input
                          type="radio"
                          value="Roupas"
                          {...register("category")}
                          onClick={() => handleClick("Roupas")}
                        />
                      </label>
                      <label
                        className={activeButton === "Camisas" ? "active" : ""}
                      >
                        <GiConverseShoe size="22" />
                        <span>Calçados</span>
                        <input
                          type="radio"
                          value="Camisas"
                          {...register("category")}
                          onClick={() => handleClick("Camisas")}
                        />
                      </label>
                      <label
                        className={
                          activeButton === "Acessorios" ? "active" : ""
                        }
                      >
                        <MdLocalMall size="22" />
                        <span>Acessorios</span>
                        <input
                          type="radio"
                          value="Acessorios"
                          {...register("category")}
                          onClick={() => handleClick("Acessorios")}
                        />
                      </label>
                    </ContainerButtons>
                  </div>
                  <div>
                    <label htmlFor="">Preço</label>
                    <input
                      {...register("price")}
                      type="text"
                      placeholder="R$ 59,90"
                    />
                  </div>
                  <div>
                    <label>Imagens</label>
                    <input
                      {...register("image")}
                      className="custom-file-input input-img"
                      type="file"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Frete</label>
                    <input
                      {...register("shipment")}
                      type="text"
                      placeholder="Frete"
                    />
                  </div>
                  <button type="submit">ENVIAR NOVO PRODUTO</button>
                </FormContainer>
              </Content>
            </Overlay>
          </Dialog.Root>
          <CardContainer>
            {filteredProducts.map((item) => {
              return (
                <div key={item.id}>
                  <Cards>
                    <img src={item.image} alt={item.description} />
                  </Cards>
                  <DetailsCard>
                    <div>
                      <h1>{item.name}</h1>
                      <span>{item.description}</span>
                    </div>
                    <div>
                      <span className="price">R$ {item.price}</span>
                    </div>
                  </DetailsCard>
                </div>
              );
            })}
          </CardContainer>
        </ProductsList>
      </ProductsContainer>
    </Container>
  );
};
