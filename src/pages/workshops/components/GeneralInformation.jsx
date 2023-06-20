import React from "react";
import styled from "styled-components";
import { ButtonStyled } from "../../../components/helpers/globalComponents";
import { Box, InputStyled } from "../../../components/ui/Elements";

const GeneralInformation = ({ workshop }) => {
  return (
    <Box>
      <MarkPaidStyled>
        <ul className="list-unstyled mb-0 d-flex">
          <li className="flex-1 me-2">
            <Box className="amount-bar">
              <ul className="justify-content-between d-flex list-unstyled mb-0">
                <li>Total amount</li>
                <li>$1,190</li>
              </ul>
            </Box>
          </li>
          <li>
            <ButtonStyled className="border-0 text-white">
              Mark as paid
            </ButtonStyled>
          </li>
        </ul>
      </MarkPaidStyled>

      <DetailListStyled className="list-unstyled">
        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Organized By</b>
            <p className="mb-0">{workshop.organizer_name}</p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Workshop Name</b>
            <p className="mb-0">{workshop.title}</p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Start Date</b>
            <p className="mb-0">
              10/09/2022 <small>at</small> 12:00 pm
            </p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>End Date</b>
            <p className="mb-0">
              11/09/2022 <small>at</small> 12:00 pm
            </p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Reserved Seats</b>
            <p className="mb-0">
              {workshop?.registration_ids?.length} /{" "}
              {workshop.total_seats_available}
            </p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Venue</b>
            <p className="mb-0">Lorem ipsum dolor sit.</p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Email</b>
            <p className="mb-0">{workshop.contact_information.contact_email}</p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Phone no.</b>
            <p className="mb-0">{workshop.contact_information.phone_number}</p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Price</b>
            <Box className="flex-1">
              <InputStyled style={{ width: "167px" }} placeholder="$&nbsp;50" />
            </Box>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Status</b>
            <p className="mb-0 text-green">Received</p>
          </Box>
        </li>

        <li>
          <Box className="d-flex align-items-center flex-content-wrap justify-content-between">
            <b>Note</b>
            <Box className="flex-1">
              <textarea
                className="w-100"
                placeholder="Write a note here..."
              ></textarea>
            </Box>
          </Box>
        </li>
      </DetailListStyled>
    </Box>
  );
};

const MarkPaidStyled = styled.div`
  max-width: 550px;
  margin-bottom: 30px;
  .amount-bar {
    padding: 12px;
    background-color: rgb(122 187 181 / 10%);
    border-radius: 10px;
    li {
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

const DetailListStyled = styled.ul`
  max-width: 550px;
  font-size: 12px;
  li {
    margin-bottom: 30px;
    b {
      color: var(--grey-color);
      text-align: left;
      font-weight: 700;
      width: 185px;
      display: block;
      flex-shrink: 0;
    }

    p {
      text-align: left;
      flex: 1;
      small {
        color: #c8c8c8;
      }
      &.text-green {
        color: #15847a;
      }
    }

    textarea {
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      resize: none;
      height: 100px;
      padding: 15px 20px;
    }
  }
`;

export default GeneralInformation;
