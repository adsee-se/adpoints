import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Point } from "@/types/point";
import { Modal } from "react-responsive-modal";
import Button from "../atoms/button";
import "src/css/modal-styling.css";

function PointTicket(props: Point) {
  const [open, setOpen] = useState(false);

  return (
    <PointTicketFrame>
      <button onClick={() => setOpen(true)}>
        <PointLine>
          <PointValue>{props.value}</PointValue>
          <PointUnit>{`p`}</PointUnit>
        </PointLine>
        <PriceLine>{`¥${props.price?.toLocaleString()}`}</PriceLine>
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "noMargin",
        }}
      >
        <ModalText>
          {props.value}pを{`¥${props.price?.toLocaleString()}`}で購入する
        </ModalText>
        <Button color="orange">購入する</Button>
      </Modal>
    </PointTicketFrame>
  );
}

const PointTicketFrame = styled("div")({
  borderRadius: `20px`,
  border: `1px solid rgba(172, 172, 179, 1)`,
  position: `relative`,
  width: "40%",
  height: `101px`,
  margin: `10px 0`,
});

const PointLine = styled("div")({
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  lineHeight: `24px`,
  position: `absolute`,
  top: `43%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
});

const PointValue = styled("span")({
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `30px`,
  lineHeight: `24px`,
});

const PointUnit = styled("span")({
  color: `rgba(0, 0, 0, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  lineHeight: `24px`,
});

const PriceLine = styled("div")(({ theme }) => ({
  color: `rgba(84, 84, 84, 1)`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  lineHeight: `24px`,
  position: `absolute`,
  top: `68%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
}));

const ModalText = styled("p")({
  margin: `30px`,
  textAlign: `center`,
  fontSize: `20px`,
});

export default PointTicket;
