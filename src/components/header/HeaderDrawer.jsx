import React from 'react'
import { Drawer, Accordion , List ,   createStyles, useMantineTheme} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  listItem: {
    paddingLeft: '0.7rem',
    marginBottom: '1rem'
  }
}))

function HeaderDrawer({opened, close }) {
  const theme = useMantineTheme()
  const { classes , cx } = useStyles(theme);
  return (
    <Drawer opened={opened} onClose={close} title="Authentication">
      <Accordion transitionDuration={0}>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          <List>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
      </Accordion>
      <Accordion transitionDuration={0}>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          <List>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
      </Accordion>
      <Accordion transitionDuration={0}>
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>
          <List>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
            <List.Item className={classes.listItem}>List Item For Test</List.Item>
          </List>
        </Accordion.Panel>
      </Accordion.Item>
      </Accordion>
    </Drawer>
  )
}

export default HeaderDrawer