import ace from 'brace';
import variables from '../../styles/global/variables.scss';
/* eslint-disable */
ace.define('ace/theme/sendgrid-snippet', ['require', 'exports', 'module', 'ace/lib/dom'], (require, exports, module) => {
    // theme
    const baseColor = variables['steel-dark']; // Steel
    const commentColor = variables['light-gray-dark']; // comment
    const classColor = variables['burnt-orange-dark']; // carrot
    const stringColor = variables['mango-dark']; // burnt orange
    const attributeName = variables['sg-blue-dark']; // sg blue
    const variableColor = variables['sg-blue-dark']; // sg blue
    const tagColor = variables['sg-blue-dark']; // sg blue
    const highlightColor = variables['color-highlighter-dark'];
    const textColor = variables.white;
    const activeLine = variables['active-line-dark'];
    exports.isDark = true;
    exports.cssClass = 'ace-sendgrid';
    exports.cssText =
        '.ace-sendgrid .ace_gutter {\
background: #25282C;\
color:' +
            baseColor +
            '\
}\
.ace-sendgrid .ace_print-margin {\
width: 1px;\
background: #0C1219\
}\
.ace-sendgrid .ace_content {\
padding: 15px;\
}\
.ace-sendgrid {\
background-color: #18222D;\
color: ' +
            textColor +
            '\
}\
.ace-sendgrid .ace_cursor {\
display: none;\
}\
.ace-sendgrid .ace_marker-layer .ace_selection {\
background: ' +
            highlightColor +
            '\
}\
.ace-sendgrid.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #294661;\
}\
.ace-sendgrid .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0);\
background-color: red;\
}\
.ace-sendgrid .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #4B4E55\
}\
.ace-sendgrid .ace_marker-layer .ace_active-line {\
background: ' +
            activeLine +
            ';\
}\
.ace-sendgrid .ace_gutter-active-line {\
background-color: #23303E\
}\
.ace_gutter > .ace_layer {\
  background-color:#2C353F\
}\
.ace-sendgrid .ace_marker-layer .ace_selected-word {\
border: 1px solid #364556\
}\
.ace-sendgrid .ace_invisible {\
color: #4B4E55\
}\
.ace-sendgrid .ace_keyword{\
  color: ' +
            baseColor +
            '\
}\
.ace-sendgrid .ace_meta{\
  color: ' +
            stringColor +
            '\
}\
.ace-sendgrid .ace_storage,\
.ace-sendgrid .ace_storage.ace_type,\
.ace-sendgrid .ace_support.ace_type {\
color: ' +
            baseColor +
            '\
}\
.ace-sendgrid .ace_keyword.ace_operator {\
color: ' +
            attributeName +
            '\
}\
.ace-sendgrid .ace_constant.ace_character,\
.ace-sendgrid .ace_constant.ace_language,\
.ace-sendgrid .ace_constant.ace_numeric,\
.ace-sendgrid .ace_keyword.ace_other.ace_unit,\
.ace-sendgrid .ace_support.ace_constant{\
  color: ' +
            baseColor +
            '\
}\
.ace-sendgrid .ace_variable.ace_parameter {\
color: ' +
            baseColor +
            '\
}\
.ace-sendgrid .ace_constant.ace_other {\
color: #CED1CF\
}\
.ace-sendgrid .ace_invalid {\
color: #CED2CF;\
background-color: #DF5F5F\
}\
.ace-sendgrid .ace_invalid.ace_deprecated {\
color: #CED2CF;\
background-color: #B798BF\
}\
.ace-sendgrid .ace_fold {\
background-color: #0C1219;\
border-color: #0C1219\
}\
.ace-sendgrid .ace_entity.ace_name.ace_function,\
.ace-sendgrid .ace_support.ace_function,\
.ace-sendgrid .ace_variable {\
color: ' +
            classColor +
            '\
}\
.ace-sendgrid .ace_support.ace_class,\
.ace-sendgrid .ace_support.ace_type {\
color: ' +
            classColor +
            '\
}\
.ace-sendgrid .ace_heading,\
.ace-sendgrid .ace_markup.ace_heading,\
.ace-sendgrid .ace_string {\
color: ' +
            stringColor +
            '\
}\
.ace-sendgrid .ace_entity.ace_name.ace_tag {\
  color: #FFFF00\
}\
.ace-sendgrid .ace_entity.ace_other.ace_attribute-name {\
  color: ' +
            attributeName +
            '\
}\
.ace-sendgrid .ace_meta.ace_tag {\
  color: ' +
            tagColor +
            '\
}\
.ace-sendgrid .ace_string.ace_regexp {\
  color: ' +
            baseColor +
            '\
}\
.ace-sendgrid .ace_variable {\
color: ' +
            variableColor +
            '\
}\
.ace-sendgrid .ace_comment {\
color: ' +
            commentColor +
            '\
}\
.ace-sendgrid .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}';
    const dom = require('../lib/dom');
    dom.importCssString(exports.cssText, exports.cssClass);
});
