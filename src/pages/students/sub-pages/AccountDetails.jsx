import React, { useContext } from "react";
import { Box, HeadingStyled, SpanStyled } from "../../../components/ui/Elements";
import { DetailList, ListContent } from "../../classes/ClassDetails";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { Accordion, AccordionContext } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { LazyImage } from "../../../components/helpers/globalComponents";
import { userAvatarImage } from "../../../components/layouts/AllImages";
import Col from 'react-bootstrap/Col';
const AccountDetails = () => {
  function ContextAwareToggle({ children, eventKey, callback, item, index }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey)
    );
    const isCurrentEventKey = activeEventKey === eventKey;
    return (
      <div
        type="button"
        className={`${
          isCurrentEventKey ? "active" : ""
        } accordion-btn d-block w-100 d-flex align-items-center pb-3`}
        onClick={decoratedOnClick}
      > 
        <SpanStyled color="var(--lg-color)" size='14px' weight={700} className='me-2'>
          {index}.
        </SpanStyled>
        <LazyImage src={ userAvatarImage } alt='username' className='rounded-circle object-cover' width={40} height={40} />
        <SpanStyled size="13px" className="me-3 flex-1 ms-3" color="var(--drColor)">
            Yaseen Hussain
        </SpanStyled>
        <ul className="list-unstyled mb-0 d-flex align-items-center ml-auto">
          <li>
            {!isCurrentEventKey ? (
              <ChevronDown
                color="var(--drColor)"
                size="15px"
              />
            ) : (
              <ChevronUp
                color="var(--drColor)"
                size="15px"
              />
            )}
          </li>
        </ul>
      </div>
    );
  }
  return (
    <Box>
        <DetailList className="p-0">
            <ListContent h="First name" t="M.Ahmed" />
            <ListContent h="Last name" t="Usama" />
            <ListContent h="Email address" t="ahmadusama@email.com" />
            <ListContent h="Account type" t="Parent account" />
            <ListContent h="No. of kids added" t={4} />
        </DetailList>
        <HeadingStyled weight={700} size="16px" className='mb-3'>
            Kids details
        </HeadingStyled>
        <Col lg={7}>
            <Accordion>
                {[1, 2].map((item, i) => (
                <Box className='mb-3' style={{ borderBottom: '1px solid var(--lg-color)' }}>
                    <ContextAwareToggle index={i+1} eventKey={i} />
                    <Accordion.Collapse eventKey={i}>
                    <Box>
                        <DetailList>
                            <ListContent h="First name" t="M.Ahmed" />
                            <ListContent h="Gender" t="Female" />
                            <ListContent h="Class level" t="5th grade" />
                        </DetailList>
                    </Box>
                    </Accordion.Collapse>
                </Box>
                ))}
            </Accordion>
        </Col>
    </Box>
  );
};

export default AccountDetails;
