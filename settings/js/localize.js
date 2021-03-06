(function (app) {

    app.localize = function (key) {
        return translations[key];
    };

    var translations = {
        'default': 'easygenerator (recommended)',
        'custom': 'Custom LRS',

        'xx': 'Custom',
        'en': 'English',
        'ua': 'Ukrainian',
        
        'changes are saved': 'All changes are saved',
        'changes are not saved': 'Changes have NOT been saved. Please reload the page and change the settings again. Contact support@easygenerator.com if problem persists.',
        'settings are not initialize': 'Template settings are not initialized. Please reload the page and change the settings again. Contact support@easygenerator.com if problem persists.',
        
        //graphical customization tab
        'graphical customization': 'Graphical customization',
        'results tracking': 'Results Tracking',
        'template language': 'Template language',
        'customize your course': 'Customize your course',
        'look and feel of the course': 'Change the look and feel of the course',
        'custom course logo': 'Custom course logo:',
        'or': 'or',
        'upload logo image': 'Upload logo image',
        'logo hint': 'Your logo will appear here<p>(recommended size 300 x 50 px)</p>',
        'clear logo': 'Clear logo',
        'upgrade account hint': 'You have to <a target="_blank" href="/account/upgrade">upgrade your account</a> in order to set custom course logo',
        
        //results tracking tab
        'track and trace settings': 'Track and trace settings',
        'disabled': 'Disabled',
        'enabled': 'Enabled',
        'advanced settings': 'Advanced settings',
        'report to': 'Report to:',
        'custom lrs settings': 'Custom LRS settings',
        'lrs url': 'LRS URL',
        'authentication required': 'Authentication required',
        'lap login': 'LAP login',
        'lap password': 'LAP password',
        'use statements': 'Use statements:',
        'started': 'Started',
        'stopped': 'Stopped',
        'passed': 'Passed',
        'mastered': 'Mastered',
        'failed': 'Failed',
        
        //template language
        'choose language for your course': 'Choose language for your course',
        'defaultText': 'Default',
        'translation': 'Translation'
    };

})(window.app = window.app || {});
