import*as t from"../../../../core/common/common.js";import*as e from"../../../../core/i18n/i18n.js";const a={defaultIndentation:"Default indentation:",setIndentationToSpaces:"Set indentation to 2 spaces",Spaces:"2 spaces",setIndentationToFSpaces:"Set indentation to 4 spaces",fSpaces:"4 spaces",setIndentationToESpaces:"Set indentation to 8 spaces",eSpaces:"8 spaces",setIndentationToTabCharacter:"Set indentation to tab character",tabCharacter:"Tab character"},n=e.i18n.registerUIStrings("ui/legacy/components/source_frame/source_frame-meta.ts",a),i=e.i18n.getLazilyComputedLocalizedString.bind(void 0,n);t.Settings.registerSettingExtension({category:t.Settings.SettingCategory.SOURCES,storageType:t.Settings.SettingStorageType.Synced,title:i(a.defaultIndentation),settingName:"textEditorIndent",settingType:t.Settings.SettingType.ENUM,defaultValue:"    ",options:[{title:i(a.setIndentationToSpaces),text:i(a.Spaces),value:"  "},{title:i(a.setIndentationToFSpaces),text:i(a.fSpaces),value:"    "},{title:i(a.setIndentationToESpaces),text:i(a.eSpaces),value:"        "},{title:i(a.setIndentationToTabCharacter),text:i(a.tabCharacter),value:"\t"}]});