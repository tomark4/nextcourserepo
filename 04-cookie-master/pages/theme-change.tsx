import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import axios from "axios";

interface Props {
  theme: string;
}

const ThemeChangePage = ({ theme }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (e: any) => {
    setCurrentTheme(e.target.value);
    localStorage.setItem("@theme", e.target.value);
    Cookies.set("themeSelected", e.target.value);
  };

  useEffect(() => {
    console.log(localStorage.getItem("@theme"));
    console.log(Cookies.get("themeSelected"));
  }, []);

  const handleClick = async () => {
    const { data } = await axios.get("/api/hello");
    console.log(data);
  };

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>
              <RadioGroup value={currentTheme} onChange={onThemeChange}>
                <FormControlLabel
                  label="Light"
                  value="light"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Dark"
                  value="dark"
                  control={<Radio />}
                ></FormControlLabel>
                <FormControlLabel
                  label="Custom"
                  value="custom"
                  control={<Radio />}
                ></FormControlLabel>
              </RadioGroup>
            </FormLabel>
          </FormControl>

          <Button onClick={handleClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // read cookie from client in server
  const { themeSelected = "light" } = ctx.req.cookies;

  const validThemes = ["light", "dark", "custom"];

  return {
    props: {
      theme: validThemes.includes(themeSelected) ? themeSelected : "light",
    },
  };
};

export default ThemeChangePage;
