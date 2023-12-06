import React from "react";
import { styled } from "@mui/material/styles";
import { YET_REPLY, ALREDY_REPLY, OTHER } from "@/helpers/const";
import { renderTimeWithinText } from "@/helpers/renderTimeWithinText";
import { Question } from "@/types/Question";

function AnswerStic(props: Question) {
  const timeWithinText = renderTimeWithinText(
    props.updated_at,
    props.created_at
  );

  return (
    <SticFrame>
      <SticTitle>{`ここにはユーザーのタイトルが...`}</SticTitle>
      <TimeDisplay>{`1分以内`}</TimeDisplay>
    </SticFrame>
  );
}

const SticFrame = styled("div")({
  display: `flex`,
  width: "80%",
  height: `52px`,
  margin: `20px auto`,
  border: `1px solid rgba(246, 161, 83, 1)`,
  borderRadius: `10px`,
});

const SticTitle = styled("div")({
  color: `rgba(24, 33, 53, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  lineHeight: `20px`,
  width: `75%`,
  margin: `auto 10px`,
});

const TimeDisplay = styled("div")({
  color: `rgba(172, 172, 179, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `10px`,
  letterSpacing: `0px`,
  lineHeight: `12px`,
  margin: `auto`,
});

export default AnswerStic;
