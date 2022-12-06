import { useFormValidation } from "@interact/Hooks/use-form-validation";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CampaignCategorySelect from "../CampaignCategorySelect";
import CampaignDropdownSelect from "../CampaignDropdownSelect";
import TitleAndDesc from "../CampaignTitleAndDesc";
import CreateCampaignItemWrapper from "../CreateCampaignItemWrapper";
import { TabNavigation } from "../TabNavigation";

const CURRENCIES = [
  { value: "USD", label: "🇺🇸 USD United States Dollar" },
  { value: "CAD", label: "🇨🇦 CAD Canadian Dollar" },
  { value: "GBP", label: "🇬🇧 GBP Pounds Sterling" },
  { value: "EUR", label: "🇪🇺 EUR Euro" },
  { value: "AUD", label: "🇦🇺 AUD Australian Dollar" },
];

export default function BasicsTab({
  data,
  setData,
  selectedTabIndex,
  setSelectedTabIndex,
}) {
  const [title, setTitle] = useState(data?.title);
  const [description, setDescription] = useState(data?.description);
  const [categories, setCategories] = useState(data?.categories);
  const [errors, setErrors] = useState(false);
  const [formValidationConditions, setFormValidationConditions] =
    useState(false);

  useEffect(() => {
    setFormValidationConditions(
      0 < title?.length &&
        title?.length <= 40 &&
        description?.length > 0 &&
        1 <= categories?.length &&
        categories?.length <= 3
    );
  }, [title, description, categories]);

  useEffect(() => {
    if (!formValidationConditions) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  }, [formValidationConditions]);

  const isTabValidated = useFormValidation({
    selectedTabIndex,
    lastCompletedTabIndex: data?.lastCompletedTabIndex,
    setData,
    formValidationConditions,
  });

  return (
    <>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Campaign title">
          Enter a title for your campaign. Include your name/alias in the title
          so fans can find you more easily.
        </TitleAndDesc>
        <TextField
          variant="outlined"
          name="title"
          defaultValue={data?.title}
          error={title <= 0}
          inputProps={{ maxLength: 40 }}
          helperText="Max. 40 characters."
          sx={{ width: 400 }}
          placeholder={`Get to know ${"name"} 1-on-1`}
          onChange={(e) => {
            const nextValue = e.target.value;

            if (nextValue?.length > 0) {
              setData({ title: nextValue });
            }
            setTitle(nextValue);
          }}
        />
      </CreateCampaignItemWrapper>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Campaign info">
          Enter a short description of your campaign.
        </TitleAndDesc>
        <TextField
          name="description"
          multiline
          rows={4}
          error={description <= 0}
          defaultValue={data?.description}
          sx={{ width: 400 }}
          onChange={(e) => {
            const nextValue = e.target.value;
            if (nextValue?.length > 0) {
              setData({ description: nextValue });
            }
            setDescription(nextValue);
          }}
        />
      </CreateCampaignItemWrapper>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Categories">
          Select 1-3 categories for your campaign.
        </TitleAndDesc>
        <CampaignCategorySelect
          data={data}
          setData={setData}
          categories={categories}
          setCategories={setCategories}
        />
      </CreateCampaignItemWrapper>
      <CreateCampaignItemWrapper>
        <TitleAndDesc title="Currency">
          Set the currency for your campaign. This will apply to giveaway entry
          prices, auction bids, and the campaign goal.
        </TitleAndDesc>
        <CampaignDropdownSelect
          placeholder="Currency"
          defaultValue={data?.currency}
          items={CURRENCIES}
          setData={setData}
        />
      </CreateCampaignItemWrapper>
      <TabNavigation
        disableNext={!isTabValidated}
        selectedTabIndex={selectedTabIndex}
        setSelectedTabIndex={setSelectedTabIndex}
      />
    </>
  );
}
