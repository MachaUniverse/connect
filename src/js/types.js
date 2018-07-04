/* @flow */
'use strict';

import { UI_EVENT, DEVICE_EVENT, RESPONSE_EVENT, TRANSPORT_EVENT } from './constants';
import * as TRANSPORT from './constants/transport';
import * as POPUP from './constants/popup';
import * as IFRAME from './constants/iframe';
import * as UI from './constants/ui';
import * as DEVICE from './constants/device';

export type Device = {
    path: string,
    label: string,
    isUsedElsewhere: boolean,
    featuresNeedsReload: boolean,
    features?: Features,
    unacquired?: boolean,
    unreadable?: boolean,
}

export type Features = {
    vendor: string,
    major_version: number,
    minor_version: number,
    patch_version: number,
    bootloader_mode: boolean,
    device_id: string,
    pin_protection: boolean,
    passphrase_protection: boolean,
    language: string,
    label: string,
    // coins: CoinType[],
    coins: Array<any>,
    initialized: boolean,
    revision: string,
    bootloader_hash: string,
    imported: boolean,
    pin_cached: boolean,
    passphrase_cached: boolean,
    state?: string;
    needs_backup?: boolean,
    firmware_present?: boolean,
}

export type Settings = {
    priority?: number;
    connectSrc?: string;
    popup?: boolean;
    transportReconnect?: boolean;
    webusb?: boolean;
    pendingTransportEvent?: boolean;
}

export type T_POPUP = typeof POPUP;
export type DeviceMessageType = $Values<typeof DEVICE>;
export type DeviceMessage = {
    event: typeof DEVICE_EVENT;
    type: DeviceMessageType;
    payload: Device;
}

export type T_UI_EVENT = typeof UI_EVENT;
export type T_UI = typeof UI;
export type UiMessageType = $Values<typeof UI>;
export type UiMessage = {
    event: typeof UI_EVENT;
    type: UiMessageType;
    payload: {
        device: Device;
        code?: string;
        browser?: any;
    }
}

export type UiResponse = {
    type: UiMessageType;
    payload: any;
}


export type TransportMessageType = $Values<typeof TRANSPORT>;
export type TransportMessage = {
    event: typeof TRANSPORT_EVENT;
    type: TransportMessageType;
    payload: Object;
}


declare function F_EventListener(type: typeof DEVICE_EVENT, handler: (event: DeviceMessage) => void): void;
declare function F_EventListener(type: typeof UI_EVENT, handler: (event: UiMessage) => void): void;
declare function F_EventListener(type: typeof TRANSPORT_EVENT, handler: (event: TransportMessage) => void): void;
declare function F_EventListener(type: DeviceMessageType, handler: (device: Device) => void):  void;

export type EventListener = typeof F_EventListener;

export type {
    P_CipherKeyValue,
    P_ComposeTransaction,
    P_CustomMessage,
    P_EthereumGetAddress,
    P_EthereumSignMessage,
    P_EthereumSignTransaction,
    P_EthereumVerifyMessage,
    P_GetAccountInfo,
    P_GetAddress,
    P_GetDeviceState,
    P_GetFeatures,
    P_GetPublicKey,
    P_RequestLogin,
    P_NEMGetAddress,
    P_NEMSignTransaction,
    P_SignMessage,
    P_SignTransaction,
    P_StellarGetAddress,
    P_StellarSignTransaction,
    P_VerifyMessage
} from 'flowtype/params';

export type {
    R_CipherKeyValue,
    R_ComposeTransaction,
    R_CustomMessage,
    R_EthereumGetAddress,
    R_EthereumSignMessage,
    R_EthereumSignTransaction,
    R_EthereumVerifyMessage,
    R_GetAccountInfo,
    R_GetAddress,
    R_GetDeviceState,
    R_GetFeatures,
    R_GetPublicKey,
    R_RequestLogin,
    R_NEMGetAddress,
    R_NEMSignTransaction,
    R_SignMessage,
    R_SignTransaction,
    R_StellarGetAddress,
    R_StellarSignTransaction,
    R_VerifyMessage
} from 'flowtype/response';