import React from 'react';
import PropTypes from 'prop-types';
import AdminMenuDialog from '../AdminMenuDialog';
import PageSettings from '../dialogs/PageSettings';
import DeletePage from '../dialogs/DeletePage';
import MovePage from '../dialogs/MovePage';
import { dictionary } from '../i18n/Internationalization';
// import smoothscroll from 'smoothscroll';

const EditPage = (props, context) => {
  const { pageData } = props;
  const { lang } = context;
  const menuItemClass = 'admin-menu__item';
  return (
    <div className="admin-menu__edit">
      <ul className="admin-menu__actions unstyled-list">
        <li className={menuItemClass}>
          <AdminMenuDialog
            instructionContent={dictionary('Sideinnstillinger', lang)}
            instructionTitle={dictionary('Jeg ønsker å endre på sideinnstillingene', lang)}
            text={dictionary('Sideinnstillinger', lang)} icon="settings"
          >
            <PageSettings {...pageData} />
          </AdminMenuDialog>
        </li>
        <li className={menuItemClass}>
          <AdminMenuDialog
            instructionContent={dictionary('Flytt siden', lang)}
            instructionTitle={dictionary('Jeg ønsker å flytte siden', lang)}
            text={dictionary('Flytt side', lang)} icon="trending_flat"
          >
            <MovePage {...pageData} />
          </AdminMenuDialog>
        </li>
        <li className={menuItemClass}>
          <AdminMenuDialog
            instructionContent={dictionary('Slett siden', lang)}
            instructionTitle={dictionary('Jeg ønsker å slette siden', lang)}
            text={dictionary('Slett side', lang)} icon="delete"
          >
            <DeletePage {...pageData} />
          </AdminMenuDialog>
        </li>
      </ul>
    </div>
  );
};

EditPage.propTypes = {
  pageData: PropTypes.object,
};

EditPage.contextTypes = {
  lang: PropTypes.string,
};

export default EditPage;
