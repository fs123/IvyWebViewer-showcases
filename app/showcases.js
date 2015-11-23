'use strict';

var bpmnViewer = new IvyWebViewer({
    container: '#viewer',
    width: '1000px',
    height: '700px'
});

var qrDiagram = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<definitions xmlns=\"http://www.omg.org/spec/BPMN/20100524/MODEL\"\r\n             xmlns:bpmndi=\"http://www.omg.org/spec/BPMN/20100524/DI\"\r\n             xmlns:omgdc=\"http://www.omg.org/spec/DD/20100524/DC\"\r\n             xmlns:omgdi=\"http://www.omg.org/spec/DD/20100524/DI\"\r\n             xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\r\n             expressionLanguage=\"http://www.w3.org/1999/XPath\"\r\n             typeLanguage=\"http://www.w3.org/2001/XMLSchema\"\r\n             targetNamespace=\"\"\r\n             xsi:schemaLocation=\"http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd\">\r\n\r\n<collaboration id=\"COLLABORATION_ID_1\">\r\n    <participant id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" name=\"Customer\" processRef=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\">\r\n    </participant>\r\n</collaboration>\r\n\r\n<process id=\"sid-C3803939-0872-457F-8336-EAE484DC4A04\" isClosed=\"false\" isExecutable=\"false\" name=\"Customer\" processType=\"None\">\r\n    <extensionElements/>\r\n    <laneSet id=\"LANESET_ID_1\">\r\n        <lane id=\"LANE_ID_1\">\r\n            <flowNodeRef>START</flowNodeRef>\r\n            <flowNodeRef>SCAN_QR_CODE</flowNodeRef>\r\n            <flowNodeRef>SCAN_OK</flowNodeRef>\r\n            <flowNodeRef>OPEN_PRODUCT</flowNodeRef>\r\n            <flowNodeRef>END</flowNodeRef>\r\n            <flowNodeRef>MERGE</flowNodeRef>\r\n        </lane>\r\n    </laneSet>\r\n    <startEvent id=\"START\" name=\"Notices&#10;QR code\">\r\n        <outgoing>FLOW_START_TO_MERGE</outgoing>\r\n    </startEvent>\r\n    <userTask completionQuantity=\"1\" id=\"SCAN_QR_CODE\" isForCompensation=\"false\" name=\"Scan QR code\" startQuantity=\"1\">\r\n        <incoming>FLOW_MERGE_TO_SCAN</incoming>\r\n        <outgoing>FLOW_SCAN_TO_SCAN_OK</outgoing>\r\n    </userTask>\r\n    <exclusiveGateway gatewayDirection=\"Diverging\" id=\"SCAN_OK\" name=\"Scan successful?&#10;\">\r\n        <incoming>FLOW_SCAN_TO_SCAN_OK</incoming>\r\n        <outgoing>FLOW_SCAN_OK_TO_OPEN_PRODUCT</outgoing>\r\n        <outgoing>FLOW_SCAN_OK_TO_MERGE</outgoing>\r\n    </exclusiveGateway>\r\n    <task completionQuantity=\"1\" id=\"OPEN_PRODUCT\" isForCompensation=\"false\" name=\"Open product information in mobile  app\" startQuantity=\"1\">\r\n        <incoming>FLOW_SCAN_OK_TO_OPEN_PRODUCT</incoming>\r\n        <outgoing>FLOW_OPEN_PRODUCT_TO_END</outgoing>\r\n    </task>\r\n    <endEvent id=\"END\" name=\"Is informed\">\r\n        <incoming>FLOW_OPEN_PRODUCT_TO_END</incoming>\r\n    </endEvent>\r\n    <exclusiveGateway gatewayDirection=\"Converging\" id=\"MERGE\">\r\n        <incoming>FLOW_START_TO_MERGE</incoming>\r\n        <incoming>FLOW_SCAN_OK_TO_MERGE</incoming>\r\n        <outgoing>FLOW_MERGE_TO_SCAN</outgoing>\r\n    </exclusiveGateway>\r\n\r\n    <sequenceFlow id=\"FLOW_START_TO_MERGE\" sourceRef=\"START\" targetRef=\"MERGE\"/>\r\n    <sequenceFlow id=\"FLOW_SCAN_TO_SCAN_OK\" sourceRef=\"SCAN_QR_CODE\" targetRef=\"SCAN_OK\"/>\r\n    <sequenceFlow id=\"FLOW_OPEN_PRODUCT_TO_END\" sourceRef=\"OPEN_PRODUCT\" targetRef=\"END\"/>\r\n    <sequenceFlow id=\"FLOW_SCAN_OK_TO_OPEN_PRODUCT\" name=\"Yes\" sourceRef=\"SCAN_OK\" targetRef=\"OPEN_PRODUCT\"/>\r\n    <sequenceFlow id=\"FLOW_MERGE_TO_SCAN\" sourceRef=\"MERGE\" targetRef=\"SCAN_QR_CODE\"/>\r\n    <sequenceFlow id=\"FLOW_SCAN_OK_TO_MERGE\" name=\"No\" sourceRef=\"SCAN_OK\" targetRef=\"MERGE\"/>\r\n</process>\r\n\r\n<bpmndi:BPMNDiagram id=\"DIAGRAM_ID_1\">\r\n    <bpmndi:BPMNPlane bpmnElement=\"COLLABORATION_ID_1\" id=\"sid-cdcae759-2af7-4a6d-bd02-53f3352a731d\">\r\n        <bpmndi:BPMNShape bpmnElement=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F\" id=\"sid-87F4C1D6-25E1-4A45-9DA7-AD945993D06F_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"933.0\" x=\"42.5\" y=\"75.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"59.142852783203125\" width=\"12.000000000000014\" x=\"47.49999999999999\" y=\"170.42857360839844\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"LANE_ID_1\" id=\"LANE_ID_1_gui\" isHorizontal=\"true\">\r\n            <omgdc:Bounds height=\"250.0\" width=\"903.0\" x=\"72.5\" y=\"75.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"START\" id=\"START_gui\">\r\n            <omgdc:Bounds height=\"30.0\" width=\"30.0\" x=\"150.0\" y=\"165.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"22.0\" width=\"46.35714340209961\" x=\"141.8214282989502\" y=\"197.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"SCAN_QR_CODE\" id=\"SCAN_QR_CODE_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"352.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"84.0\" x=\"360.5\" y=\"172.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"SCAN_OK\" id=\"SCAN_OK_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"550.0\" y=\"160.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.0\" width=\"102.0\" x=\"521.0\" y=\"127.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"OPEN_PRODUCT\" id=\"OPEN_PRODUCT_gui\">\r\n            <omgdc:Bounds height=\"80.0\" width=\"100.0\" x=\"687.5\" y=\"140.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n                <omgdc:Bounds height=\"36.0\" width=\"83.14285278320312\" x=\"695.9285736083984\" y=\"162.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"END\" id=\"END_gui\">\r\n            <omgdc:Bounds height=\"28.0\" width=\"28.0\" x=\"865.0\" y=\"166.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"11.0\" width=\"62.857147216796875\" x=\"847.5714263916016\" y=\"196.0\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNShape bpmnElement=\"MERGE\" id=\"MERGE_gui\" isMarkerVisible=\"true\">\r\n            <omgdc:Bounds height=\"40.0\" width=\"40.0\" x=\"240.0\" y=\"160.0\"/>\r\n        </bpmndi:BPMNShape>\r\n        <bpmndi:BPMNEdge bpmnElement=\"FLOW_SCAN_TO_SCAN_OK\" id=\"FLOW_SCAN_TO_SCAN_OK_gui\">\r\n            <omgdi:waypoint x=\"452.5\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"550.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"FLOW_SCAN_OK_TO_OPEN_PRODUCT\" id=\"FLOW_SCAN_OK_TO_OPEN_PRODUCT_gui\">\r\n            <omgdi:waypoint x=\"590.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"687.5\" y=\"180\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"12.048704338048935\" width=\"16.32155963195521\" x=\"597.8850936986571\" y=\"155\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"FLOW_START_TO_MERGE\" id=\"FLOW_START_TO_MERGE_gui\">\r\n            <omgdi:waypoint x=\"180.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"240.0\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"FLOW_MERGE_TO_SCAN\" id=\"FLOW_MERGE_TO_SCAN_gui\">\r\n            <omgdi:waypoint x=\"280.0\" y=\"180\"/>\r\n            <omgdi:waypoint x=\"352.5\" y=\"180\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"FLOW_OPEN_PRODUCT_TO_END\" id=\"FLOW_OPEN_PRODUCT_TO_END_gui\">\r\n            <omgdi:waypoint x=\"787.5\" y=\"180.0\"/>\r\n            <omgdi:waypoint x=\"865.0\" y=\"180.0\"/>\r\n        </bpmndi:BPMNEdge>\r\n        <bpmndi:BPMNEdge bpmnElement=\"FLOW_SCAN_OK_TO_MERGE\" id=\"FLOW_SCAN_OK_TO_MERGE_gui\">\r\n            <omgdi:waypoint x=\"570.5\" y=\"200.0\"/>\r\n            <omgdi:waypoint x=\"570.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"269.0\"/>\r\n            <omgdi:waypoint x=\"260.5\" y=\"200.0\"/>\r\n            <bpmndi:BPMNLabel labelStyle=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n                <omgdc:Bounds height=\"21.4285888671875\" width=\"12.0\" x=\"550\" y=\"205\"/>\r\n            </bpmndi:BPMNLabel>\r\n        </bpmndi:BPMNEdge>\r\n    </bpmndi:BPMNPlane>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-e0502d32-f8d1-41cf-9c4a-cbb49fecf581\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"11.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n    <bpmndi:BPMNLabelStyle id=\"sid-84cb49fd-2f7c-44fb-8950-83c3fa153d3b\">\r\n        <omgdc:Font isBold=\"false\" isItalic=\"false\" isStrikeThrough=\"false\" isUnderline=\"false\" name=\"Arial\" size=\"12.0\"/>\r\n    </bpmndi:BPMNLabelStyle>\r\n</bpmndi:BPMNDiagram>\r\n</definitions>\r\n";

bpmnViewer.importXML(qrDiagram, function (err) {

    if (err) {
        return console.error('could not import BPMN 2.0 diagram', err);
    }

    var canvas = bpmnViewer.get('canvas');
    var overlays = bpmnViewer.get('overlays');
    var pathMap = bpmnViewer.get('pathMap');


    // zoom to fit full viewport
    canvas.zoom('fit-viewport');

    initIvyMarker();
    initOverlays();
});

// IvyMarker: Highlight executed elements
var initIvyMarker = function () {
    // TODO: only used for the showcase, should be replaced with the REST API
    var executedElementIds = [
        'START', 'FLOW_START_TO_MERGE', 'MERGE', 'FLOW_MERGE_TO_SCAN', 'SCAN_QR_CODE'
    ];
    var ivyMarker = bpmnViewer.get('ivyMarker');

    /*
     * EXECUTED ELEMENTS
     */
    document.getElementById('mark-executed-path-button').onclick = function () {
        ivyMarker.highlightExecutedElements(executedElementIds);
    };
    document.getElementById('reset-executed-path-button').onclick = function () {
        ivyMarker.unhighlightAllElements();
    };

    /*
     * CURRENT ELEMENT
     */
    document.getElementById('mark-current-path-button').onclick = function () {
        ivyMarker.highlightCurrentElement(['SCAN_QR_CODE']);
    };
    document.getElementById('reset-current-path-button').onclick = function () {
        ivyMarker.unhighlightAllElements();
    };

    /*
     * ERROR ELEMENTS
     */
    document.getElementById('mark-error-path-button').onclick = function () {
        ivyMarker.highlightErrorElements(['SCAN_QR_CODE']);
    };
    document.getElementById('reset-error-path-button').onclick = function () {
        ivyMarker.unhighlightAllElements();
    };
};


////// OVERLAYS ****************
var initOverlays = function () {
    var overlays = bpmnViewer.get('overlays');

    var noteManager = function () {
        var addedNote = null;
        var lastStyle = 'success';
        var lastPosition = 'tr';
        var lastType = 'text';
        var lastElement = 'FLOW_SCAN_OK_TO_OPEN_PRODUCT';
        var _addNote = function (type, position, style, element) {
            if (addedNote) {
                removeNote();
            }
            lastPosition = position;
            lastType = type;
            lastStyle = style;
            if (element === undefined) {
                element = 'SCAN_QR_CODE';
            }
            lastElement = element;
            var ivyOverlays = bpmnViewer.get('ivyOverlays');
            var builder = ivyOverlays.createOverlayBuilder()
                .forElement(element);
            if (type === 'number') {
                builder.withNumber('213');
            } else {
                builder.withText('Reads in 99.8% the correct code.');
            }

            builder.asCustom(style);
            builder.onPosition(position);

            addedNote = builder.createAndAddOverlay();
        };

        var removeNote = function () {
            return function () {
                if (!addedNote) {
                    console.log('Note not found.');
                    return;
                }
                var ivyOverlays = bpmnViewer.get('ivyOverlays');
                ivyOverlays.remove(addedNote);
                addedNote = null;


                var canvas = bpmnViewer.get('canvas');
                canvas.zoom('fit-viewport');

            };
        }();

        return {
            remove: removeNote,
            showText: function (position, element) {
                _addNote('text', position, lastStyle, element);
            },
            showNumber: function (position, element) {
                _addNote('number', position, lastStyle, element);
            },
            showAs: function (style) {
                _addNote(lastType, lastPosition, style, lastElement);
            }
        };

    }();

    document.getElementById('show-text-overlay-button').onclick = function () {
        noteManager.showText('tr');
    };
    document.getElementById('show-text-overlay-button-tr').onclick = function () {
        noteManager.showText('tr');
    };
    document.getElementById('show-text-overlay-button-br').onclick = function () {
        noteManager.showText('br');
    };
    document.getElementById('show-text-overlay-button-bl').onclick = function () {
        noteManager.showText('bl');
    };
    document.getElementById('reset-text-overlay-button').onclick = (noteManager.remove);

    document.getElementById('show-text-overlay-button-info').onclick = function () {
        noteManager.showAs('info');
    };
    document.getElementById('show-text-overlay-button-success').onclick = function () {
        noteManager.showAs('success');
    };
    document.getElementById('show-text-overlay-button-warning').onclick = function () {
        noteManager.showAs('warning');
    };
    document.getElementById('show-text-overlay-button-danger').onclick = function () {
        noteManager.showAs('danger');
    };

    document.getElementById('show-number-overlay-button').onclick = function () {
        noteManager.showNumber('tr');
    };
    document.getElementById('show-number-overlay-button-tr').onclick = function () {
        noteManager.showNumber('tr');
    };
    document.getElementById('show-number-overlay-button-br').onclick = function () {
        noteManager.showNumber('br');
    };
    document.getElementById('show-number-overlay-button-bl').onclick = function () {
        noteManager.showNumber('bl');
    };
    document.getElementById('reset-number-overlay-button').onclick = (noteManager.remove);


    document.getElementById('show-arrow-number-overlay-button-left').onclick = function () {
        noteManager.showNumber('left', 'FLOW_MERGE_TO_SCAN');
    };
    document.getElementById('show-arrow-number-overlay-button-center').onclick = function () {
        noteManager.showNumber('center', 'FLOW_MERGE_TO_SCAN');
    };
    document.getElementById('show-arrow-number-overlay-button-right').onclick = function () {
        noteManager.showNumber('right', 'FLOW_MERGE_TO_SCAN');
    };

};