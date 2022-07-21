import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileUploader } from 'react-drag-drop-files';
import {
  Backdrop,
  CloseBtn,
  DropFileArea,
  ExtLink,
  LoadedImg,
  MessagePanel,
  ModalContentPanel,
  PanelTitle,
  UploadBtn,
} from './UploadPanel.styled';
import Icons from 'images/icons/symbol-defs.svg';
import {
  PanelWrapper,
  FormWrapper,
  Svg,
} from 'components/StyledBlocks/StyledBlocks';
import { useEffect } from 'react';
import { postImageFile } from 'api-service/api';
import Loader from 'components/Loader/Loader';

const fileTypes = ['JPG', 'PNG'];

const UploadPanel = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [logMessage, setLogMessage] = useState(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    // create the preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleFileUpload = file => {
    setLogMessage(null);
    setFile(file);
  };

  const handleAPIUpload = () => {
    setIsLoading(true);
    postImageFile(file)
      .then(response => {
        // console.log(response);
        if (typeof response === 'string') {
          setLogMessage(response);
          return;
        }
        if (response.data.approved === 1) {
          setLogMessage(1);
        }
      })
      .finally(() => {
        setFile(null);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Backdrop />
      <PanelWrapper>
        <ModalContentPanel>
          <FormWrapper>
            <div style={{ marginLeft: 'auto' }} />
            <Link to="/gallery">
              <CloseBtn>
                <Svg>
                  <use href={Icons + '#icon-close-20'} />
                </Svg>
              </CloseBtn>
            </Link>
          </FormWrapper>
          <PanelTitle>Upload a .jpg or .png Cat Image</PanelTitle>
          <p>
            Any uploads must comply with the{' '}
            <ExtLink
              href="https://thedogapi.com/privacy"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              upload guidelines
            </ExtLink>{' '}
            or face deletion.
          </p>
          <FileUploader
            handleChange={handleFileUpload}
            name="file"
            types={fileTypes}
            maxSize={1}
            onSizeError={() =>
              setLogMessage(
                'This file is too big. Please, choose a file of maximum 1mb'
              )
            }
          >
            <DropFileArea className={typeof logMessage === 'string' && 'error'}>
              {isLoading && <Loader />}
              {!preview && (
                <p>
                  <span>Drag here</span> your file or <span>Click here</span> to
                  upload
                </p>
              )}
              {preview && file && <LoadedImg src={preview} alt={file.name} />}
            </DropFileArea>
          </FileUploader>
          {file ? (
            <>
              <p>Image File Name: {file.name}</p>
              <UploadBtn type="button" onClick={handleAPIUpload}>
                Upload photo
              </UploadBtn>
            </>
          ) : (
            <p>No file selected</p>
          )}
          {logMessage === 1 && (
            <MessagePanel>
              <Svg>
                <use href={Icons + '#icon-success-20'} />
              </Svg>
              Thanks for the Upload — Dog found!
            </MessagePanel>
          )}
          {logMessage !== 1 && logMessage && (
            <MessagePanel>
              <Svg>
                <use href={Icons + '#icon-error-20'} />
              </Svg>
              {logMessage}
            </MessagePanel>
          )}
        </ModalContentPanel>
      </PanelWrapper>
    </>
  );
};

export default UploadPanel;
