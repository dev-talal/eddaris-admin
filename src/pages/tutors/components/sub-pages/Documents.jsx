import React from "react";
import { AttachIcon } from "../../../../components/layouts/AllImages";
import {
  Box,
  HeadingStyled,
  ListTileStyled,
} from "../../../../components/ui/Elements";

const Documents = () => {
  
  return (
    <Box>
      {[...Array(5)].map((item, key) => (
        <ListTileStyled
          className="d-flex align-items-center justify-content-between"
          key={key}
        >
          <HeadingStyled size="13px" color="var(--themeColor)" weight={700}>
            Iqama.pdf
          </HeadingStyled>
          <AttachIcon width={23} height={23} />
        </ListTileStyled>
      ))}
    </Box>
  );
};

export default Documents;
