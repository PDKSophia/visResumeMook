/**
 * @description 项目经验Form
 * 基于 MyDialog 二次封装，结合 MyMaskHoc 加一蒙层
 * 由于弹窗更多注重信息的的输入，所以就不需要通过 useClickAway 实现点击蒙层之外的地方关闭
 * 因为用户无心的误操作将弹窗关闭，就会使得交互上体验不佳
 */
import React, { useEffect, useCallback, useState } from 'react';
import './index.less';
import { Dialog } from '@components/MyModal';
import MyMaskHoc from '@common/hoc/MyMaskHoc';
import Left from '../../components/Layout/Left';
import Right from '../../components/Layout/Right';
import { useSelector } from 'react-redux';
import AdapterExperience, { AdapterExperienceType } from '../../adapter';
import ConfirmModal from '../../components/ConfirmModal';
import useCrudHook from './useCrudHook';
import Form from './Form';

interface IProps {
  onCancel?: () => {};
  onSubmit?: () => {};
}
function ProjectExperienceForm(props: IProps | any) {
  const addFn = useCrudHook.useAdd();
  const deleteFn = useCrudHook.useDelete();

  const [index, setIndex] = useState(-1);
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    deleteIndex: -1,
  });
  const [editModal, setEditModal] = useState({
    showCancel: false, // 编辑下的取消
    showSave: false, // 编辑下的保存
    status: false, // 编辑的状态
    prevEditIndex: -1,
    nextEditIndex: 1,
  });
  const [experienceList, setExperienceList] = useState<AdapterExperienceType[]>([]);
  const [currentExperience, serCurrentExperience] = useState<AdapterExperienceType>({});
  const userResume: TSResume.IntactResume = useSelector((state: any) => state.resumeModel.userResume);

  // 1. 初次当条目列表不为空，默认选中第一条
  useEffect(() => {
    if (userResume?.projectExperience && userResume?.projectExperience?.length > 0) {
      setIndex(0);
    }
  }, []);

  // 2. 当条目数据列表修改更新，则更新数据
  useEffect(() => {
    if (userResume?.projectExperience && userResume?.projectExperience?.length > 0) {
      setExperienceList(AdapterExperience.project(userResume?.projectExperience || []));
    } else {
      setExperienceList([]);
    }
  }, [userResume?.projectExperience]);

  // 3. 当条目索引发生改变，更新当前选中的条目数据
  useEffect(() => {
    if (index >= 0) {
      serCurrentExperience(experienceList[index]);
    }
  }, [index, experienceList]);

  // 4. 删除条目
  const onDelete = (index: number) => {
    setDeleteModal({
      show: true,
      deleteIndex: index,
    });
  };
  const onDeleteCancel = useCallback(() => {
    setDeleteModal({
      show: false,
      deleteIndex: -1,
    });
  }, [index, deleteModal]);
  const onDeleteOk = useCallback(() => {
    deleteFn(deleteModal.deleteIndex, (newList) => {
      if (newList.length > 0) {
        setIndex(0);
      } else {
        setIndex(-1);
      }
      setDeleteModal({
        show: false,
        deleteIndex: -1,
      });
    });
  }, [index, deleteModal]);

  // 5. 修改选中的条目
  const onChange = (index: number) => {
    setIndex(index);
  };

  // 6. 添加条目
  const onAdd = () => {
    addFn((newList) => {
      if (newList.length > 0) {
        // 定位激活刚添加的这条数据
        setIndex(0);
        serCurrentExperience(AdapterExperience.project(newList)?.[0]);
      }
    });
  };

  // 7. 编辑条目
  const onToggleEdit = useCallback(
    (status: boolean) => {
      setEditModal((prev) => {
        return {
          ...prev,
          status: status,
        };
      });
    },
    [editModal]
  );
  const onEditCancel = useCallback(
    (status: boolean) => {
      setEditModal((prev) => {
        return {
          ...prev,
          showCancel: status,
        };
      });
    },
    [editModal]
  );

  return (
    <Dialog
      title="项目经验"
      showFooter={false}
      width={960}
      childStyle={{ padding: 0 }}
      config={{
        cancelBtn: {
          callback: () => {
            props?.onCancel && props.onCancel();
          },
        },
      }}
    >
      <div styleName="form">
        <div styleName="left-box">
          <Left index={index} experienceList={experienceList} onAdd={onAdd} onChange={onChange} onDelete={onDelete} />
        </div>
        <div styleName="right-box">
          {experienceList.length > 0 && (
            <Right
              isEdit={editModal?.status}
              currentExperience={currentExperience}
              onEdit={() => onToggleEdit(true)}
              onCancel={() => onEditCancel(true)}
              onSave={() => {}}
            >
              <Form />
            </Right>
          )}
        </div>
      </div>
      {deleteModal.show && (
        <ConfirmModal
          title="确定删除条目吗？"
          desc="删除后将无法恢复哦～"
          onCancel={onDeleteCancel}
          onOk={onDeleteOk}
        />
      )}
      {editModal.showCancel && (
        <ConfirmModal
          title="你确定放弃编辑的笔记内容？"
          desc="放弃后将无法恢复哦～"
          onCancel={() => {
            onEditCancel(false);
          }}
          onOk={() => {
            onToggleEdit(false);
            onEditCancel(false);
          }}
        />
      )}
    </Dialog>
  );
}
export default MyMaskHoc(ProjectExperienceForm)({ position: 'center' });
