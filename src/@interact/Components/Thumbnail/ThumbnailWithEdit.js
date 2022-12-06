import { IconButton, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Edit as EditIcon } from "@mui/icons-material";

import {storage} from "@jumbo/services/auth/firebase/firebase"
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"

export const ThumbnailWithEdit = ({ title, URI, maxHeight = 218, onImageChanged }) => {

	const InputRef = useRef(null);

	const onEditButton = () => {
		// Open the edit file
		InputRef.current.click();
	}


	const inputImageToBlob = () => {
		// Get the file from the input
		const file = InputRef.current.files[0];

		// Create a blob from the file
		// Maintain original blob file
		const blob = new Blob([file], { type: file.type });
		// Return the blob
		return blob;
	}

	const onInputChange = () =>{
		// Validate image
		const blob = inputImageToBlob();
		
		// Random string for the image name + file extension
		const tempURI = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + "." + blob.type.slice(6);

		// Upload the image to firebase storage
		const storageRef = ref(storage, "campaign_thumbnails/" + tempURI);
		const uploadTask = uploadBytesResumable(storageRef, blob);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Observe state change events such as progress, pause, and resume
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log("Upload is " + progress + "% done");
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
					default:
						break;
				}
			},
			(error) => {
				// Handle unsuccessful uploads
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
					onImageChanged(url);
				});
			}
		);
	}


  return (
    <div
      style={{
        display: "block",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* <Tooltip title={title} arrow>
        <QuestionCircleOutlined style={{ color: "gray", cursor: "help"}} /> */}
      {/* </Tooltip> */}
      <img
        style={{
          width: "100%",
          height: "100%",
          maxHeight,
          borderRadius: 14,
          objectFit: "cover",
        }}
        src={URI}
        alt={title}
      />

      <IconButton
				onClick={onEditButton}
        style={{
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 1px 5px black",
          position: "absolute",
          top: 0,
          right: 0,
          margin: 8,
        }}
      >
        <EditIcon />
      </IconButton>

      <input
				onChange={onInputChange}
				accept="image/*"
				ref={InputRef}
        type={"file"}
        style={{
          display: "none",
        }}
      />
    </div>
  );
};
