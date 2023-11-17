import React from "react";
import { connect } from "dva";
import styles from "./IndexPage.css";
import { Button } from "antd";
function IndexPage() {
  return (
    <div className={styles.normal}>

      <div>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
        
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
