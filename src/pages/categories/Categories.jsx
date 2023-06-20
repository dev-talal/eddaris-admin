import { useContext, useEffect, useState } from "react";
import { Accordion, AccordionContext, Form } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import styled from "styled-components";
import {
  ButtonStyled,
  RequestLoader,
  SearchBarFilter,
} from "../../components/helpers/globalComponents";
import { ImageIcon, TrashIcon } from "../../components/layouts/AllImages";
import { Box, HeadingStyled, SpanStyled } from "../../components/ui/Elements";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryData } from "../../store/Slices/category/categorySlice";
const Categories = () => {
  const { loading, categoires } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryData());
  }, []);
  const [expandSubCategory, setExpandCategory] = useState(false);
  function ContextAwareToggle({ children, eventKey, callback, item }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <AccordionButtonStyled
        type="button"
        className={`${
          isCurrentEventKey ? "active" : ""
        } accordion-btn d-block w-100 d-flex align-items-center justify-content-between`}
      >
        <SpanStyled size="13px" className="me-3" color="var(--drColor)">
          {item?.name}
        </SpanStyled>
        <ul className="list-unstyled mb-0 d-flex align-items-center">
          <li className="me-2">
            <SpanStyled
              size="12px"
              color="var(--grey-color)"
              style={{ marginRight: "10px" }}
            >
              Bookings: 20
            </SpanStyled>
            <SpanStyled
              color="var(--drColor)"
              style={{ opacity: "0.15", lineHeight: "1", paddingTop: "1px" }}
            >
              |
            </SpanStyled>
          </li>
          <li className="me-1">
            <Box style={{ marginTop: "-4px" }}>
              <Form.Check
                className="pt-0"
                checked={item?.disabled}
                type="switch"
              />
            </Box>
          </li>
          <li className="me-2">
            <TrashIcon height="20" />
          </li>
          <li>
            {!isCurrentEventKey ? (
              <ChevronDown
                color="#BDBDBD"
                size="15px"
                onClick={decoratedOnClick}
              />
            ) : (
              <ChevronUp
                color="#BDBDBD"
                size="15px"
                onClick={decoratedOnClick}
              />
            )}
          </li>
        </ul>
      </AccordionButtonStyled>
    );
  }
  return !loading && categoires ? (
    <Box>
      <Box className="max__container__form border-bottom-0">
        <HeadingStyled color="var(--theme-grey-l)" size="14px" weight="700">
          Add new category
        </HeadingStyled>
        <CategoryAddFieldStyled className="d-flex align-items-center">
          <Form
            as="input"
            type="text"
            placeholder="New category name"
            className="border-0 h-100"
          />
          <button className="border-0 h-100">Add</button>
        </CategoryAddFieldStyled>
        <HeadingStyled
          color="var(--theme-grey-l)"
          size="14px"
          weight="700"
          className="mt-3 pt-1"
        >
          Cateogry image
        </HeadingStyled>
        <Box className="d-flex align-items-center">
          <Box className="me-4">
            <ImageResultCard className="d-flex align-items-center justify-content-center">
              <ImageIcon />
            </ImageResultCard>
          </Box>
          <label style={{ marginTop: "10px" }} type="button">
            <Form as="input" type="file" className="d-none" />
            <SpanStyled size="16px" weight="700" color="var(--themeColor)">
              Browse image
            </SpanStyled>
          </label>
        </Box>
        <Box>
          <HeadingStyled
            color="var(--theme-grey-l)"
            size="14px"
            weight="700"
            className="mt-3 pb-1"
          >
            Add subcategory
          </HeadingStyled>
          <CategoryBox>
            <Box className="d-flex header-row">
              <Box className="heading-category">
                <HeadingStyled
                  className="heading-text"
                  color="var(--theme-grey-l)"
                  size="13px"
                  weight="700"
                >
                  Added category
                </HeadingStyled>
              </Box>
              <Box className="body-heading-category">
                <HeadingStyled
                  className="heading-text"
                  color="var(--theme-grey-l)"
                  size="13px"
                  weight="700"
                >
                  Sub-categories
                </HeadingStyled>
              </Box>
            </Box>
            <Box className="d-flex body-category-row">
              <Box className="body-category-list">
                <ul className="list-unstyled mb-0">
                  <li>
                    <button
                      type="button"
                      className="d-block w-100 bg-transparent border-0 text-center"
                    >
                      <SpanStyled size="12px" color="#2B2D2F">
                        Category name
                      </SpanStyled>
                    </button>
                  </li>
                  <li className="active">
                    <button
                      type="button"
                      className="d-block w-100 bg-transparent border-0 text-center"
                    >
                      <SpanStyled size="12px" color="#2B2D2F">
                        Category name
                      </SpanStyled>
                    </button>
                  </li>
                </ul>
              </Box>
              <Box className="body-category-details d-flex flex-column justify-content-between">
                <ul className="d-flex align-items-center justify-content-between mb-0 list-unstyled">
                  <li>
                    <SpanStyled color="#2B2D2F" weight="500" size="13px">
                      Lorem ipsum
                    </SpanStyled>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="bg-transparent p-0 border-0"
                    >
                      <TrashIcon height="18" />
                    </button>
                  </li>
                </ul>
                <Box>
                  <Box className="d-flex align-items-center">
                    <button
                      type="button"
                      className="bg-transparent border-0"
                      onClick={() => setExpandCategory(!expandSubCategory)}
                    >
                      {expandSubCategory ? (
                        <ChevronUp className="me-2" size="14px" />
                      ) : (
                        <ChevronDown className="me-2" size="14px" />
                      )}
                      <SpanStyled
                        size="12px"
                        weight="700"
                        color="var(--theme-grey-l)"
                      >
                        Add sub-category
                      </SpanStyled>
                    </button>
                  </Box>
                  {expandSubCategory ? (
                    <CategoryAddFieldStyled
                      className="d-flex align-items-center"
                      style={{ height: "34px" }}
                    >
                      <Form
                        as="input"
                        type="text"
                        placeholder="Sub-category name"
                        className="border-0 h-100"
                      />
                      <button className="border-0 h-100">Add</button>
                    </CategoryAddFieldStyled>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </CategoryBox>
          <Box className="mt-4 text-end">
            <ButtonStyled className="border-0 text-white px-4">
              Save category
            </ButtonStyled>
          </Box>
        </Box>
      </Box>
      <Box className="container__md border-0 mt-4 pt-3">
        <Box className="d-flex align-items-center justify-content-between">
          <HeadingStyled size="24px" color="var(--drColor)" weight="700">
            Saved categories
          </HeadingStyled>
          <Box style={{ maxWidth: "232px" }}>
            <SearchBarFilter placeholder="Search a category" />
          </Box>
        </Box>
        <Box className="mb-4">
          <Accordion className="custom-accordion">
            <Box>
              {categoires?.categories.map((item, i) => (
                <>
                  <ContextAwareToggle eventKey={i} item={item} />
                  <Accordion.Collapse eventKey={i}>
                    <Box>
                      {item?.sub_categories.map((list, x) => (
                        <ul
                          className="list-unstyled mb-2 d-flex align-items-center"
                          key={x}
                        >
                          <li className="me-2">
                            <SpanStyled
                              size="12px"
                              weight="700"
                              color="var(--grey-color)"
                            >
                              {list?.name}
                            </SpanStyled>
                          </li>
                          <li className="me-1">
                            <Box style={{ marginTop: "-4px" }}>
                              <Form.Check
                                className="pt-0 form-check-input-custom"
                                checked={list?.disabled}
                                type="switch"
                              />
                            </Box>
                          </li>
                          <li className="me-2">
                            <TrashIcon height="17" />
                          </li>
                          <li>
                            <SpanStyled
                              color="var(--drColor)"
                              className="d-inline-block"
                              style={{
                                opacity: "0.15",
                                lineHeight: "1",
                                paddingTop: "6px",
                              }}
                            >
                              |
                            </SpanStyled>
                            <SpanStyled
                              size="12px"
                              color="var(--grey-color)"
                              style={{ marginLeft: "10px" }}
                            >
                              Bookings: 20
                            </SpanStyled>
                          </li>
                        </ul>
                      ))}

                      {item?.sub_categories.length <= 0 ? (
                        <HeadingStyled
                          className="text-start"
                          size="12px"
                          weight="700"
                        >
                          No Sub category found
                        </HeadingStyled>
                      ) : null}
                    </Box>
                  </Accordion.Collapse>
                </>
              ))}
            </Box>
          </Accordion>
        </Box>
      </Box>
    </Box>
  ) : (
    <RequestLoader />
  );
};

export const AccordionButtonStyled = styled.button`
  background-color: rgb(200 200 200 / 10%);
  border-radius: 20px;
  border: 0;
  padding: 9px 20px;
  text-align: left;
  margin-top: 20px;
  .form-check-input {
    width: 29px;
    height: 17.81px;
  }
`;
const CategoryAddFieldStyled = styled.div`
  border: 1px solid #dddddd;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 6px;
  height: 45px;
  input {
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 400;
    font-size: 13px;
    flex: 1;
    color: var(--theme-grey-l);
  }
  button {
    width: 89px;
    background: rgb(122 187 181 / 10%);
    color: var(--themeColor);
    font-weight: 700;
    font-size: 14px;
  }
`;
const ImageResultCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 135px;
  height: 96px;
  margin-top: 10px;
`;
const CategoryBox = styled.div`
  background: #fefeff;
  border: 1px solid #bdc3c4;
  border-radius: 7px;
  height: 259px;
  .header-row {
    border-bottom: 1px solid #bdc3c4;
    .heading-text {
      padding: 10px;
    }
    .body-heading-category {
      padding: 0px 10px;
    }
  }
  .body-category-list {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .heading-category,
  .body-category-list {
    border-right: 1px solid #bdc3c4;
    width: 130px;
    height: 100%;
  }
  .body-category-row {
    height: calc(100% - 39.5px);
  }
  .body-category-list li {
    button {
      padding: 6px 10px;
      color: #2b2d2f;
      transition: 0.2s ease-in-out background-color;
    }
    &.active,
    &:hover {
      button {
        background-color: rgb(60 75 100 / 10%) !important;
      }
      span {
        font-weight: 700;
      }
    }
  }
  .body-category-details {
    flex: 1;
    padding: 10px 15px;
    ul {
      padding: 0px 5px;
      li {
        padding-top: 6px;
        button svg path {
          fill: var(--theme-danger);
        }
      }
    }
  }
`;
export default Categories;
