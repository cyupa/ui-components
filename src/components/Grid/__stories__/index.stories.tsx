import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Grid } from "../";
import { Box } from "../../../util/stories";
import { Item } from "../../Item";

storiesOf("Grid", module).add("Default", () => (
  <Grid>
    <Item>
      <Box>First</Box>
    </Item>
    <Item>
      <Box>Second</Box>
    </Item>
    <Item>
      <Box>Third</Box>
    </Item>
    <Item>
      <Box>Fourth</Box>
    </Item>
    <Item>
      <Box>Fifth</Box>
    </Item>
    <Item>
      <Box>Sixth</Box>
    </Item>
  </Grid>
));
