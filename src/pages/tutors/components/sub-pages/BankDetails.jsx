import React from "react";
import styled from "styled-components";
import { Box, SpanStyled } from "../../../../components/ui/Elements";

const ListContent = ({ h, t }) => {
  return (
    <li>
      <SpanStyled color="var(--lg-color)">{h}</SpanStyled>
      <SpanStyled color="var(--drColor)">{t}</SpanStyled>
    </li>
  );
};

const BankDetails = () => {

  return (
    <Box>
      <DetailList className="list-unstyled">
        <ListContent h="Tutor account number" t="093485438702" />

        <ListContent h="Name on account" t="Ali Bashir" />

        <ListContent h="SWIFT code" t="4945h73oj2r" />

        <ListContent h="Bank name" t="Tutor Bank Ltd." />

        <ListContent
          h="Bank address"
          t="Al-Jud road, Nahl block, 87594 Riyadh, KSA."
        />

        <ListContent h="IBAN number" t="45UNILPKKA38549647986" />

        <ListContent h="Post code" t="357893" />
      </DetailList>
    </Box>
  );
};

const DetailList = styled.ul`
  max-width: fit-content;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    span {
      &:first-child {
        width: 162px;
        display: block;
        margin-right: 50px;
        font-weight: 600;
        font-size: 14px;
      }

      &:last-child {
        font-size: 13px;
      }
    }
  }
`;

export default BankDetails;
