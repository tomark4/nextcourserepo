import {
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

const ThemeChangePage = () => {
  const [currentTheme, setCurrentTheme] = useState("custom");

  const onThemeChange = (e: any) => {
    setCurrentTheme(e.target.value);
    localStorage.setItem("@theme", e.target.value);
    Cookies.set("themeSelected", e.target.value);
  };

  useEffect(() => {
    console.log(localStorage.getItem("@theme"));
  }, []);

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
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangePage;
