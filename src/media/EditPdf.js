import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { triggerGlobal } from 'nocms-events';
import { IconButton } from 'nocms-atoms';
import { dictionary } from '../i18n/Internationalization';
import Pdf from '../dialogs/media/Pdf';
import ModalDialog from '../atoms/ModalDialog';

export default class EditPdf extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onPdfClick = this.onPdfClick.bind(this);
    this.state = {
      dialogOpen: false,
    };
  }
  onClose() {
    this.setState({ dialogOpen: false });
  }

  onClick() {
    this.setState({ dialogOpen: true });
  }

  onPdfClick(publicId) {
    triggerGlobal('nocms.value-changed', this.props.scope, { publicId, format: 'pdf' });
    this.setState({ dialogOpen: false });
  }


  render() {
    const title = dictionary('Jeg ønsker å legge til en PDF-fil', this.context.lang);
    const instructionContent = dictionary('Legg til pdf-instruksjoner', this.context.lang);
    return (
      <span> {this.props.activeEditMode && this.context.editMode ?
        <span className="admin-button__add-image">
          <IconButton onClick={this.onClick} iconType="picture_as_pdf" text="Rediger PDF" iconSize="small" iconOnly transparent noBorder />
          <ModalDialog
            onClose={this.onClose}
            modalActive={this.state.dialogOpen}
            cover
            showHeader
            showInstructions
            animation
            titleIcon="picture_as_pdf"
            title={title}
            instructionContent={instructionContent}
            titleText={dictionary('PDF-filer', this.context.lang)}
            showTitle
          >
            <Pdf
              scope={this.props.scope}
              {...this.props.data}
              onClose={this.onClose}
              onClick={this.onPdfClick}
              placeholderImage={this.props.placeholderImage}
            />
          </ModalDialog>
        </span> : null}
      </span>
    );
  }
}

EditPdf.propTypes = {
  scope: PropTypes.string,
  data: PropTypes.object,
  activeEditMode: PropTypes.bool,
  placeholderImage: PropTypes.string,
};

EditPdf.defaultProps = {
  activeEditMode: false,
  targetDevices: false,
};

EditPdf.contextTypes = {
  lang: PropTypes.string,
  editMode: PropTypes.bool,
};
