import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import SettingToggle from 'flavours/glitch/features/notifications/components/setting_toggle';
import SettingText from 'flavours/glitch/components/setting_text';

const messages = defineMessages({
  filter_regex: { id: 'home.column_settings.filter_regex', defaultMessage: 'Filter out by regular expressions' },
  settings: { id: 'home.settings', defaultMessage: 'Column settings' },
});

export default @injectIntl
class ColumnSettings extends React.PureComponent {

  static propTypes = {
    settings: ImmutablePropTypes.map.isRequired,
    onChange: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired,
  };

  render () {
    const { settings, onChange, intl } = this.props;

    return (
      <div>
        <span className='column-settings__section'><FormattedMessage id='home.column_settings.basic' defaultMessage='Basic' /></span>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'reblog']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_reblogs' defaultMessage='Show boosts' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'reply']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_replies' defaultMessage='Show replies' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'public']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_public' defaultMessage='Show Public' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'unlisted']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_unlisted' defaultMessage='Show Unlisted' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'private']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_private' defaultMessage='Show Private' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'direct']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_direct' defaultMessage='Show DMs' />} />
        </div>

        <div className='column-settings__row'>
          <SettingToggle prefix='home_timeline' settings={settings} settingPath={['shows', 'sensitive']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_sensitive' defaultMessage='Show Sensitive' />} />
        </div>

        <span className='column-settings__section'><FormattedMessage id='home.column_settings.advanced' defaultMessage='Advanced' /></span>

        <div className='column-settings__row'>
          <SettingText prefix='home_timeline' settings={settings} settingPath={['regex', 'body']} onChange={onChange} label={intl.formatMessage(messages.filter_regex)} />
        </div>
      </div>
    );
  }

}
