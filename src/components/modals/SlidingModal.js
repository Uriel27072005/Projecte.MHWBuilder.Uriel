import React from "react";
import { withStyles } from "@mui/styles";
import { Modal, Slide } from '@mui/material'; // Ensure Slide is imported from @mui.material
import PropTypes from "prop-types";

function SlidingModal(props) {
  const {
    children, isModalOpen, onClose, classesProp,
  } = props;
  return (
    <Modal
      className="flexCenter"
      open={isModalOpen}
      onClose={onClose}
      style={{ overflowY: "scroll" }}
    >
      <Slide
        direction="up"
        in={isModalOpen}
        classes={classesProp}
        mountOnEnter
        unmountOnExit
      >
        {children}
      </Slide>
    </Modal>
  );
}

SlidingModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SlidingModal;
